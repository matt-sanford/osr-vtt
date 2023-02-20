<template>
  <div class="panel" ref="panel" :style="style" style="position: fixed">
    <Card>
      <template #header>
        <header
          class="header"
          :class="zone.splash ? 'h-24' : 'h-11'"
          :style="`background-image: url(${zone.splash})`"
          @mouseover="show.edit = true"
          @mouseleave="show.edit = false"
        >
          <zone-edit :class="show.edit ? 'opacity-100' : 'opacity-0'"/>
        </header>
      </template>
      <template #title>
        <div
          class="handle"
          ref="handle"
          @mouseover="show.handle = true"
          @mouseleave="show.handle = false"
        >
          {{ zone.title }} <Icon icon="pi-bars" :class="show.handle ? 'opacity-100' : 'opacity-0'"/>
        </div>
      </template>
      <template #content>
        <zone-content/>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref, reactive, defineProps, watch, provide } from 'vue';
import { useDraggable } from '@vueuse/core';
import Card from 'primevue/card';
import Icon from '../components/icon.vue';
import ZoneEdit from './zone-edit.vue';
import ZoneContent from './zone-conent.vue';

const props = defineProps({
  zone: {
    type: Object,
    required: true
  }
});
provide('zoneID', props.zone.id);

const panel = ref();
const handle = ref();
const show = reactive({
  handle: false,
  edit: false,
});
const { style } = useDraggable(panel, {
  initialValue: { x: props.zone.x, y: props.zone.y },
  handle
});

console.log(props.zone);

watch(style, (newValue) => {
  const [x, y] = newValue.split(';').filter(v => v).map(item => item.split(':')[1].replace('px', ''))
  props.zone.x = x;
  props.zone.y = y;
});
</script>

<style lang="postcss" scoped>
  .panel {
    @apply w-96;
    .header {
      @apply flex items-start justify-end;
      @apply p-1;
      @apply bg-center bg-cover;
      @apply rounded-t-lg;
      background-color: grey;

      & > button {
        @apply mx-2;
      }
    }
    .handle {
      @apply flex items-baseline justify-between;
      @apply select-none;
      @apply cursor-move;
    }
  }
</style>