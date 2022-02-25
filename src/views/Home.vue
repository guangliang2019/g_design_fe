<template>
  <div class="home">
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38.8633 65.4277L67.704 82.0789V119.936L98.9294 137.933L98.9294 171.255L38.8633 136.241L38.8633 65.4277Z"
        fill="currentColor" style="fill: rgb(var(--primary-5))"
      />
      <path
        d="M40.0002 63.0408L100.062 28.2998L128.9 44.9583L68.8387 79.6998L40.0002 63.0408Z"
        fill="currentColor" style="fill: rgb(var(--primary-6))"
      />
      <path
        d="M102.043 100.125L130.711 83.573L159.38 100.125L130.711 116.677L102.043 100.125Z"
        fill="currentColor" style="fill: rgb(var(--primary-6))"
      />
      <path
        d="M161.379 102.996L101.313 137.933L101.313 171.235L161.379 136.299L161.379 102.996Z"
        fill="currentColor" style="fill: rgb(var(--primary-4))"
      />
    </svg>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
