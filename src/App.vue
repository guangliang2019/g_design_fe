<template>
  <g-layout class="root">
    <g-layout-header class="layout-header">
      <Header />
    </g-layout-header>
    <router-view />
  </g-layout>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Header from "./components/Header.vue";

export default defineComponent({
  components: {
    Header,
  },
});
</script>

<style lang="less">
body {
  transition: 200ms background-color;
  background-color: var(--color-bg-1);
  height: 100vh;
}
#app {
  height: 100%;
}
.g-layout-header {
  justify-content: center;
  height: 52px;
  padding: 0 3px;
  .header-text-button {
    color: var(--color-text-1);
    font-weight: 500;
    margin-left: 16px;
  }
  .header-text-button:hover {
    color: var(--color-text-1);
  }
}
.g-layout-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
