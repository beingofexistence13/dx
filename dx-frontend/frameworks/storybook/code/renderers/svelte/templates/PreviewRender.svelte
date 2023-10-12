<script>
  import SlotDecorator from './SlotDecorator.svelte';
  import { dedent } from 'ts-dedent';

  export let name;
  export let kind;
  export let storyFn;
  export let showError;
  export let storyContext;

  let {
    /** @type {SvelteComponent} */
    Component,
    /** @type {any} */
    props = {},
    /** @type {{[string]: () => {}}} Attach svelte event handlers */
    on,
  } = storyFn();

  // reactive, re-render on storyFn change
  $: ({ Component, props = {}, on } = storyFn());

  const eventsFromArgTypes = Object.fromEntries(
    Object.entries(storyContext.argTypes)
      .filter(([k, v]) => v.action && props[k] != null)
      .map(([k, v]) => [v.action, props[k]])
  );

  if (!Component) {
    showError({
      title: `Expecting a Svelte component from the story: "${name}" of "${kind}".`,
      description: dedent`
        Did you forget to return the Svelte component configuration from the story?
        Use "() => ({ Component: YourComponent, props: {} })"
        when defining the story.
      `,
    });
  }
</script>

<SlotDecorator {Component} {props} on={{ ...eventsFromArgTypes, ...on }} />
