import type {
  Addon_BaseType,
  Addon_Collection,
  Addon_Types,
  Addon_TypesMapping,
  API_Panels,
  API_StateMerger,
} from '@storybook/types';
import { Addon_TypesEnum } from '@storybook/types';
import type { ModuleFn } from '../lib/types';
import type { Options } from '../store';

export interface SubState {
  selectedPanel: string;
  addons: Record<string, never>;
}

export interface SubAPI {
  /**
   * Returns a collection of elements of a specific type.
   * @protected This is used internally in storybook's manager.
   * @template T - The type of the elements in the collection.
   * @param {Addon_Types | Addon_TypesEnum.experimental_PAGE} type - The type of the elements to retrieve.
   * @returns {API_Collection<T>} - A collection of elements of the specified type.
   */
  getElements: <
    T extends
      | Addon_Types
      | Addon_TypesEnum.experimental_PAGE
      | Addon_TypesEnum.experimental_SIDEBAR_BOTTOM
      | Addon_TypesEnum.experimental_SIDEBAR_TOP = Addon_Types
  >(
    type: T
  ) => Addon_Collection<Addon_TypesMapping[T]>;
  /**
   * Returns a collection of all panels.
   * This is the same as calling getElements('panel')
   * @protected This is used internally in storybook's manager.
   * @deprecated please use getElements('panel') instead. This API will be removed in storybook 8.0.
   * @returns {API_Panels} - A collection of all panels.
   */
  getPanels: () => API_Panels;
  /**
   * Returns a collection of panels currently enabled for the selected story.
   * @protected This is used internally in storybook's manager.
   * @deprecated please use getElements('panel') instead, and do the filtering manually. This API will be removed in storybook 8.0.
   * @returns {API_Panels} - A collection of all panels.
   */
  getStoryPanels: () => API_Panels;
  /**
   * Returns the id of the currently selected panel.
   * @returns {string} - The ID of the currently selected panel.
   */
  getSelectedPanel: () => string;
  /**
   * Sets the currently selected panel via it's ID.
   * @param {string} panelName - The ID of the panel to select.
   * @returns {void}
   */
  setSelectedPanel: (panelName: string) => void;
  /**
   * Sets the state of an addon with the given ID.
   * @template S - The type of the addon state.
   * @param {string} addonId - The ID of the addon to set the state for.
   * @param {S | API_StateMerger<S>} newStateOrMerger - The new state to set, or a function which receives the current state and returns the new state.
   * @param {Options} [options] - Optional options for the state update.
   * @deprecated This API might get dropped, if you are using this, please file an issue.
   * @returns {Promise<S>} - A promise that resolves with the new state after it has been set.
   */
  setAddonState<S>(
    addonId: string,
    newStateOrMerger: S | API_StateMerger<S>,
    options?: Options
  ): Promise<S>;
  /**
   * Returns the state of an addon with the given ID.
   * @template S - The type of the addon state.
   * @param {string} addonId - The ID of the addon to get the state for.
   * @deprecated This API might get dropped, if you are using this, please file an issue.
   * @returns {S} - The state of the addon with the given ID.
   */
  getAddonState<S>(addonId: string): S;
}

export function ensurePanel(panels: API_Panels, selectedPanel?: string, currentPanel?: string) {
  const keys = Object.keys(panels);

  if (keys.indexOf(selectedPanel) >= 0) {
    return selectedPanel;
  }

  if (keys.length) {
    return keys[0];
  }
  return currentPanel;
}

export const init: ModuleFn<SubAPI, SubState> = ({ provider, store, fullAPI }) => {
  const api: SubAPI = {
    getElements: (type) => provider.getElements(type),
    getPanels: () => api.getElements(Addon_TypesEnum.PANEL),
    getStoryPanels: () => {
      const allPanels = api.getElements(Addon_TypesEnum.PANEL);
      const { storyId } = store.getState();
      const story = fullAPI.getData(storyId);

      if (!allPanels || !story || story.type !== 'story') {
        return allPanels;
      }

      const { parameters } = story;

      const filteredPanels: Addon_Collection<Addon_BaseType> = {};
      Object.entries(allPanels).forEach(([id, panel]) => {
        const { paramKey } = panel;
        if (paramKey && parameters && parameters[paramKey] && parameters[paramKey].disable) {
          return;
        }
        filteredPanels[id] = panel;
      });

      return filteredPanels;
    },
    getSelectedPanel: () => {
      const { selectedPanel } = store.getState();
      return ensurePanel(api.getElements(Addon_TypesEnum.PANEL), selectedPanel, selectedPanel);
    },
    setSelectedPanel: (panelName) => {
      store.setState({ selectedPanel: panelName }, { persistence: 'session' });
    },
    setAddonState<S>(
      addonId: string,
      newStateOrMerger: S | API_StateMerger<S>,
      options?: Options
    ): Promise<S> {
      let nextState;
      const { addons: existing } = store.getState();
      if (typeof newStateOrMerger === 'function') {
        const merger = newStateOrMerger as API_StateMerger<S>;
        nextState = merger(api.getAddonState<S>(addonId));
      } else {
        nextState = newStateOrMerger;
      }
      return store
        .setState({ addons: { ...existing, [addonId]: nextState } }, options)
        .then(() => api.getAddonState(addonId));
    },
    getAddonState: (addonId) => {
      return store.getState().addons[addonId] || globalThis?.STORYBOOK_ADDON_STATE[addonId];
    },
  };

  return {
    api,
    state: {
      selectedPanel: ensurePanel(
        api.getElements(Addon_TypesEnum.PANEL),
        store.getState().selectedPanel
      ),
      addons: {},
    },
  };
};
