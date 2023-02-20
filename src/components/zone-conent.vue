<template>
  <Splitter class="splitter">
    <SplitterPanel class="splitter-panel">
      <AvatarGroup class="">
        <Avatar :image="'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png'" size="large" shape="circle" />
        <Avatar :image="'https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png'" size="large" shape="circle" />
        <Avatar :image="'https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png'" size="large" shape="circle" />
      </AvatarGroup>
    </SplitterPanel>
    <SplitterPanel class="splitter-panel">
      <AvatarGroup class="">
        <Avatar :image="'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png'" size="xlarge" shape="circle" />
      </AvatarGroup>
    </SplitterPanel>
  </Splitter>
</template>

<script setup>
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
</script>

<style lang="postcss" scoped>
.splitter {
  margin: -10px;
  margin-bottom: -22px;
  .splitter-panel {
    @apply h-24;
    @apply flex items-center justify-center flex-col;
  }
}
</style>