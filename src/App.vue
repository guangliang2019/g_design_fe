<template>
  <g-layout>
    <g-layout-header class="layout-header">
      <div class="header-c">
        <div class="left">
          <Logo @click="changeTheme" />
        </div>
      </div>
    </g-layout-header>
    <g-layout-content>
      <router-view />
    </g-layout-content>
  </g-layout>
</template>
<script>
import Logo from "./components/Logo.vue";

export default {
  components: {
    Logo,
  },
  methods: {
    changeTheme(){
      if (document.body.getAttribute("theme") === "dark") document.body.setAttribute("theme", 'light');
      else document.body.setAttribute("theme", 'dark');
      console.log('1')
      return;
    },
  },
};
</script>

<style lang="less">
body {
  transition: 200ms background-color;
  background-color: var(--color-bg-1);
}
.left {
  height: 40px;
  margin-left: 8px;
}

.g-layout-content {
  display: flex;
  flex-direction: column;
}
.header-c {
  width: 100vw;
  max-width: 1440px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
