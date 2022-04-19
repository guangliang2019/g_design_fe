<template>
  <g-layout>
    <g-layout-sider
      collapsible
      :collapsed="collapsed"
      @collapse="onCollapse"
      breakpoint="xl"
      :collapsedWidth="60"
    >
      <gl-menu :collapsed="collapsed" :style="{ width: '100%' }">
        <gl-menu-item key="0_1">
          <IconHome />
          开发指南
        </gl-menu-item>
        <gl-menu-item key="0_2">
          <IconCalendar />
          Menu 2
        </gl-menu-item>
        <gl-sub-menu key="1">
          <template #title>
            <span><IconCalendar />Navigation 1</span>
          </template>
          <gl-menu-item key="1_1">Menu 1</gl-menu-item>
          <gl-menu-item key="1_2">Menu 2</gl-menu-item>
          <gl-sub-menu key="2" title="Navigation 2">
            <gl-menu-item key="2_1">Menu 1</gl-menu-item>
            <gl-menu-item key="2_2">Menu 2</gl-menu-item>
          </gl-sub-menu>
          <gl-sub-menu key="3" title="Navigation 3">
            <gl-menu-item key="3_1">Menu 1</gl-menu-item>
            <gl-menu-item key="3_2">Menu 2</gl-menu-item>
            <gl-menu-item key="3_3">Menu 3</gl-menu-item>
          </gl-sub-menu>
        </gl-sub-menu>
        <gl-sub-menu key="4">
          <template #title>
            <span><IconCalendar />Navigation 4</span>
          </template>
          <gl-menu-item key="4_1">Menu 1</gl-menu-item>
          <gl-menu-item key="4_2">Menu 2</gl-menu-item>
          <gl-menu-item key="4_3">Menu 3</gl-menu-item>
        </gl-sub-menu>
      </gl-menu>
    </g-layout-sider>
    <g-layout-content>
      <router-view />
    </g-layout-content>
  </g-layout>
</template>

<script>
import { defineComponent, ref } from "@vue/runtime-core";
import { Message } from "@arco-design/web-vue";

export default defineComponent({
  setup() {
    const collapsed = ref(false);
    const onCollapse = (val, type) => {
      const content = type === "responsive" ? "触发响应式收缩" : "点击触发收缩";
      Message.info({
        content,
        duration: 2000,
      });
      collapsed.value = val;
    };
    return {
      collapsed,
      onCollapse,
    };
  },
});
</script>

<style lang="less">
.arco-menu {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  font-size: 14px;
  line-height: 1.5715;
  transition: width 0.2s cubic-bezier(0.34, 0.69, 0.1, 1),
    background-color 300ms !important;
}
.arco-menu .arco-menu-item {
  transition: background-color 300ms;
}

.arco-menu .arco-menu-pop-header {
  transition: background-color 300ms;
}

.arco-menu .arco-menu-inline {
  transition: background-color 300ms;
}

.arco-menu-vertical .arco-menu-inline-header {
  transition: background-color 300ms;
}
.arco-menu-item.arco-menu-selected {
  transition: background-color 300ms;
}
</style>
