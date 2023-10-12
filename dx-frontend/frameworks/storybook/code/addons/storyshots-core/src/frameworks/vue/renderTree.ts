/* eslint-disable @typescript-eslint/ban-ts-comment */
import Vue from 'vue';

// this is defined in @storybook/vue but not exported,
// and we need it to inject args into the story component's props
const VALUES = 'STORYBOOK_VALUES';

function getRenderedTree(story: any) {
  const component = story.render();

  // @ts-ignore FIXME storyshots type error
  const vm = new Vue({
    // @ts-ignore FIXME storyshots type error
    render(h) {
      return h(component);
    },
  });

  // @ts-ignore FIXME storyshots type error
  vm[VALUES] = story.initialArgs;

  return vm.$mount().$el;
}

export default getRenderedTree;
