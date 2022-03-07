<template>
  <g-layout>
    <g-layout-sider :collapsedWidth="60" collapsible> </g-layout-sider>
    <g-layout-content>
      <router-view />
    </g-layout-content>
  </g-layout>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({});
</script>

<style lang="less"></style>
