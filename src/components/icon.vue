<template>
  <i :class="{
    pi: true,
    [icon]: true,
    'pi-spinner': spinning
  }"/>
</template>

<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    icon: {
      type: String,
      required: true,
    },
    spinning: {
      type: Boolean,
      default: false
    }
  })
</script>