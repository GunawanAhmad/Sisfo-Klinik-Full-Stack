<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style >
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
html {
  font-size: 62.5%;
}

.logo img {
  height: 2rem;
  width: 9rem;
}

.container-loader {
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
}

.container-loader.hide {
  display: none;
}

.circle {
  width: 15px;
  height: 15px;
  background-color: #164886;
  border-radius: 50%;
  margin-right: 0.6rem;
  animation: bounce 1s ease-in-out infinite;
}

.circle:last-child {
  animation-delay: 0.3s;
  background-color: #f7b702;
}

.circle:nth-last-child(2) {
  animation-delay: 0.2s;
  background-color: #5fb2bd;
}

@keyframes bounce {
  50% {
    transform: translateY(-200%);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
