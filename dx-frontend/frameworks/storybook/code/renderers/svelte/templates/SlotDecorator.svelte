<script>
  import { onMount } from 'svelte';

  export let decorator = undefined;
  export let Component;
  export let props = {};
  export let on = undefined;

  let instance;
  let decoratorInstance;

  function getInstance() {
    // instance can be undefined if a decorator doesn't have <slot/>
    return instance || decoratorInstance;
  }

  if (on) {
    // Attach svelte event listeners.
    Object.keys(on).forEach((eventName) => {
      onMount(() => getInstance().$on(eventName, on[eventName]));
    });
  }
</script>

{#if decorator}
  <svelte:component this={decorator.Component} {...decorator.props} bind:this={decoratorInstance}>
    <svelte:component this={Component} {...props} bind:this={instance} />
  </svelte:component>
{:else}
  <svelte:component this={Component} {...props} bind:this={instance} />
{/if}
