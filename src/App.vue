<template>
  <div id="app">
    <transition name="slide" mode="out-in">
      <CubeText
        v-if="face === 0"
        key="text"
        msg="This is a Vue.js App"
        v-on:click.native="changeFace(1)"
      />
      <CubeInput
        v-else-if="face === 1"
        key="input"
        v-on:change-face="changeFace"
      />
      <CubeInputBandit v-else key="inputBandit" v-on:change-face="changeFace" />
    </transition>
  </div>
</template>

<script>
import CubeText from './components/CubeText.vue';
import CubeInput from './components/CubeInput.vue';
import CubeInputBandit from './components/CubeInputBandit.vue';

export default {
  name: 'app',
  data: function() {
    return {face: 0};
  },
  components: {
    CubeText,
    CubeInput,
    CubeInputBandit,
  },
  methods: {
    changeFace(face) {
      this.face = face;
    },
  },
};
</script>

<style>
body {
  background-color: #41b883;
  overflow: hidden;
}

body div {
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 30vh;
  font-size: 2em;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter {
  transform: translateX(100px);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}
</style>
