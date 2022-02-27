<template>
  <g-layout>
    <g-layout-header class="layout-header">
      <div class="header-c">
        <div class="left">
          <Logo />
        </div>
        <div class="right">
          <g-button class="header-text-button" type="text">设计</g-button>
          <g-button class="header-text-button" type="text">开发</g-button>
          <g-button class="header-text-button" type="text">介绍</g-button>
          <g-button
            class="header-text-button"
            @click="changeTheme"
            type="text"
            >{{ modeText }}</g-button
          >
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
  mounted() {
    this.mode =
      document.body.getAttribute("theme") === "dark" ? "dark" : "light";
  },
  data() {
    return {
      mode: "dark",
    };
  },
  components: {
    Logo,
  },
  methods: {
    changeTheme() {
      if (document.body.getAttribute("theme") === "dark") {
        document.body.setAttribute("theme", "light");
        this.mode = "light";
      } else {
        document.body.setAttribute("theme", "dark");
        this.mode = "dark";
      }
    },
  },
  computed: {
    modeText() {
      console.log(this.mode);
      if (this.mode === "dark") return "浅色模式";
      else return "深色模式";
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
.g-layout-header {
  justify-content: center;
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
.header-c {
  width: 100vw;
  max-width: 1440px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
</style>
