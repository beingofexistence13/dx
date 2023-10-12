import { global as globalThis } from '@storybook/global';

const MyButton = globalThis.Components.Button;

export default {
  component: {},
};

export const Render = () => ({
  render: (h) => h('div', ['renders a div with some text in it..']),
});

export const RenderComponent = () => ({
  render(h) {
    return h(MyButton, { props: { color: 'pink', label: 'renders component: MyButton' } });
  },
});

export const Template = () => ({
  template: `
      <div>
        <h1>A template</h1>
        <p>rendered in vue in storybook</p>
      </div>`,
});

export const TemplateComponent = () => ({
  components: { MyButton },
  template: '<my-button label="MyButton rendered in a template" />',
});

export const TemplateMethods = () => ({
  components: { MyButton },
  template: `
      <p>
        <em>Clicking the button will navigate to another story using the 'addon-links'</em><br/>
        <my-button :rounded="true" @click="action" label="MyButton rendered in a template + props & methods" />
      </p>`,
  methods: {
    action: () => {},
  },
});

// FIXME: test JSX?
// export const JSX = () => ({
//   components: { MyButton },
//   render() {
//     // eslint-disable-next-line react/react-in-jsx-scope, react/no-children-prop
//     return <my-button label="MyButton rendered with JSX" />;
//   },
// });

export const PreRegisteredComponent = () => ({
  /* By pre-registering component in preview.js,
   * the need to register all components with each story is removed.
   * You'll only need the template */
  template: `
      <p>
        <em>This component was pre-registered in .storybook/preview.js</em><br/>
        <global-button label="GlobalButton rendered in a template" />
      </p>`,
});
