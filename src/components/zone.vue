<template>
  <div class="panel" ref="panel" :style="style" style="position: fixed">
    <Card>
      <template #header v-if="zone.splash">
        <header
          class="header"
          :style="`background-image: url(${zone.splash})`"
          @mouseover="show.edit = true"
          @mouseleave="show.edit = false"
        >
          <zone-edit ref="edit" :class="show.edit ? 'opacity-100' : 'opacity-25'"/>
        </header>
      </template>
      <template #title>
        <div
          class="handle"
          ref="handle"
          @mouseover="show.handle = true"
          @mouseleave="show.handle = false"
        >
          {{ zone.title }} <Icon icon="pi-bars" :class="show.handle ? 'opacity-100' : 'opacity-10'"/>
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
const edit = ref();
const show = reactive({
  handle: false,
  edit: false,
});
const { style } = useDraggable(panel, {
  initialValue: { x: props.zone.x, y: props.zone.y },
  handle
});

watch(style, (newValue) => {
  const [x, y] = newValue.split(';').filter(v => v).map(item => item.split(':')[1].replace('px', ''))
  props.zone.x = x;
  props.zone.y = y;
});

const showProducts = () => {}
</script>

<style lang="postcss" scoped>
  .panel {
    @apply w-96;
    .header {
      @apply flex items-start justify-end;
      @apply p-1 h-24;
      @apply bg-center bg-cover;
      @apply rounded-t-lg;
    }
    .handle {
      @apply flex items-baseline justify-between;
      @apply cursor-move;
    }
  }
</style>