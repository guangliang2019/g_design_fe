<template>
  <div class="root">
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38.8633 65.4277L67.704 82.0789V119.936L98.9294 137.933L98.9294 171.255L38.8633 136.241L38.8633 65.4277Z"
        fill="currentColor"
        style="fill: rgb(var(--primary-5))"
      />
      <path
        d="M40.0002 63.0408L100.062 28.2998L128.9 44.9583L68.8387 79.6998L40.0002 63.0408Z"
        fill="currentColor"
        style="fill: rgb(var(--primary-6))"
      />
      <path
        d="M102.043 100.125L130.711 83.573L159.38 100.125L130.711 116.677L102.043 100.125Z"
        fill="currentColor"
        style="fill: rgb(var(--primary-6))"
      />
      <path
        d="M161.379 102.996L101.313 137.933L101.313 171.235L161.379 136.299L161.379 102.996Z"
        fill="currentColor"
        style="fill: rgb(var(--primary-4))"
      />
    </svg>
    <h1>简单而不简陋的 UI 框架</h1>
    <div id="container">
      <button class="learn-more">
        <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
        </span>
        <span class="button-text">GET STARTED</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.root {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 300px);
  min-height: 600px;
}
#container {
  grid-area: main;
  align-self: center;
  justify-self: center;
}
button.learn-more {
  width: 12rem;
  height: auto;
  margin-left: 1.2rem;
  transition: 500ms margin-left;
}
button {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
}
button.learn-more .circle {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: relative;
  display: block;
  margin: 0;
  width: 3rem;
  height: 3rem;
  background: rgba(var(--primary-5),1);
  border-radius: 1.625rem;
}
button.learn-more .circle .icon.arrow {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  left: 0.625rem;
  width: 1.125rem;
  height: 0.125rem;
  background: none;
}
button.learn-more .circle .icon {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background: #fff;
}
button.learn-more .circle .icon.arrow::before {
  position: absolute;
  content: "";
  top: -0.25rem;
  right: 0.0625rem;
  width: 0.625rem;
  height: 0.625rem;
  border-top: 0.125rem solid #fff;
  border-right: 0.125rem solid #fff;
  transform: rotate(45deg);
}
button.learn-more .button-text {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0.12rem;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.75rem 0;
  margin: 0 0 0 1.85rem;
  color: rgb(var(--primary-5));
  font-weight: 700;
  line-height: 1.6;
  text-align: center;
  text-transform: uppercase;
}
.learn-more:hover {
  margin-left: 0;
  .circle {
    width: 100%;
    .icon {
      background: white;
      transform: translate(1rem, 0);
    }
  }
  .button-text {
    color: white;
  }
}
* {
  box-sizing: border-box;
}
</style>
