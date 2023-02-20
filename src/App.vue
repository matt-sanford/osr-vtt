<template>
  <zone
    v-for="zone in zones.all"
    :key="zone.id"
    :zone="zone"
  />
</template>

<script setup>
import {useZonesState} from './state/zones';
import Zone from './components/zone.vue';

const zones = useZonesState();
console.log(zones.all)
</script>
