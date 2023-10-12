<template>
  <button type="button" class="classes" @click="onClick" :disabled="disabled">{{ label }}</button>
</template>

<script lang="ts">
import Vue from 'vue';
import './button.css';

export default Vue.extend({
  name: 'my-button',

  props: {
    label: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick(): void {
      this.$emit('onClick');
    },
  },
});
</script>
