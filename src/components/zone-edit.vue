<template>
  <Button v-bind="$attrs" class="p-button-rounded p-button-outlined" icon="pi pi-pencil" @click="visible = !visible"/>
  <Dialog class="w-1/3" v-model:visible="visible" modal dismissableMask maximizable>
    <template #header>
		  <h3>Edit "{{ zone.title }}"</h3>
    </template>

    <div class="field">
      <label for="title">Zone title</label>
      <Text id="title" type="text" v-model="data.title" autofocus/>
    </div>

    <div class="field">
      <label for="title">Zone splash</label>
      <Text id="title" type="text" v-model="data.splash"/>
    </div>

    <div class="field">
      <label>Preview</label>
      <div class="preview" :style="data.splash ? `background-image: url(${data.splash})` : ''"></div>
    </div>

    <template #footer>
      <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="visible = false"/>
      <Button label="Save" icon="pi pi-check" @click="save"/>
    </template>
  </Dialog>
</template>

<script setup>
  import {ref, inject, reactive, watch} from 'vue';
  import Button from 'primevue/button';
  import Dialog from 'primevue/dialog';
  import Text from 'primevue/inputtext';
  import {useZonesState} from '../state/zones';

  const visible = ref(false);
  const zoneID = inject('zoneID');
  const zoneState = useZonesState();
  const zone = ref(zoneState.getZone({id: zoneID})); 
  const data = reactive({
    title: zone.value.title,
    splash: zone.value.splash
  });

  watch(visible, (isTrue) => {
    if (isTrue) {
      zone.value = zoneState.getZone({id: zoneID}); 
      data.title = zone.value.title;
      data.splash = zone.value.splash;
    }
  })

  function save() {
    zone.value = zoneState.getZone({id: zoneID}); 
    zone.value.title = data.title;
    zone.value.splash = data.splash;
    visible.value = false;
  }
</script>

<style lang="postcss" scoped>
.field {
  @apply flex flex-col;
  @apply my-2;
}

.preview {
  outline: 1px dotted azure;
  outline-offset: 2px;
  @apply w-96 h-24 my-4;
  @apply bg-center bg-cover;
  @apply rounded-lg;
}
</style>