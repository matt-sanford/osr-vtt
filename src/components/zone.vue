<template>
  <div class="panel" ref="panel" :style="style" style="position: fixed">
    <Card>
      <template #header v-if="zone.splash">
        <header class="header" :style="`background-image: url(${zone.splash})`"></header>
      </template>
      <template #title>
        <div class="handle" ref="handle">
          {{ zone.title }}
        </div>
      </template>
      <template #content>
        placeholder...
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref, defineProps, watch } from 'vue';
import { useDraggable } from '@vueuse/core';
import Card from 'primevue/card';

const props = defineProps({
  zone: {
    type: Object,
    required: true
  }
})

const panel = ref();
const handle = ref();
const { style } = useDraggable(panel, {
  initialValue: { x: props.zone.x, y: props.zone.y },
  handle
})

watch(style, (newValue) => {
  const [x, y] = newValue.split(';').filter(v => v).map(item => item.split(':')[1].replace('px', ''))
  props.zone.x = x;
  props.zone.y = y;
})
</script>

<style lang="postcss" scoped>
  .panel {
    @apply w-96;
    .header {
      @apply h-24;
      @apply bg-center bg-cover;
      @apply rounded-t-lg;
      background-image: url(v-bind(zone.splash));
    }

    .handle {
      @apply cursor-move;
    }
  }
</style>