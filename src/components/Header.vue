<template>
  <div class="header-c">
    <div class="left">
      <Logo />
    </div>
    <div class="right only-desktop">
      <g-button style="margin: 0" class="header-text-button" type="text"
        >设计</g-button
      >
      <g-button class="header-text-button" @click="toDev" type="text"
        >开发</g-button
      >
      <g-button class="header-text-button" @click="changeTheme" type="text">{{
        modeText
      }}</g-button>
    </div>
    <div class="right only-mobile">
      <g-button type="text">
        <template #icon>
          <icon-menu size="24" />
        </template>
      </g-button>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import Logo from "./Logo.vue";

export default defineComponent({
  components: {
    Logo,
  },
  setup() {
    const router = useRouter();
    const toDev = () => {
      router.push("/dev/start");
    };
    let mode = ref("light");
    let modeText = computed(() =>
      mode.value === "dark" ? "浅色模式" : "深色模式"
    );
    const changeTheme = () => {
      if (document.body.getAttribute("theme") === "dark") {
        document.body.setAttribute("theme", "light");
        mode.value = "light";
      } else {
        document.body.setAttribute("theme", "dark");
        mode.value = "dark";
      }
    };

    return {
      modeText,
      changeTheme,
      toDev,
    };
  },
});
</script>

<style lang="less">
.header-c {
  width: 100vw;
  //max-width: 1440px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.left {
  height: 40px;
  margin-left: 8px;
}
.right {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-right: 16px;
}
.right {
  .g-btn-text {
    color: var(--color-text-2);
    font-weight: 500;
    margin-left: 16px;
  }
  .g-btn-text {
    color: var(--color-text-2);
  }
}
</style>
