<template>
  <div>
    <transition name="slide" mode="out-in">
      <SlideText
        v-if="face === 0"
        key="text"
        msg="This is a Vue.js App"
        v-on:click.native="changeFace(1)"
      />
      <SlideInput
        v-else-if="face === 1"
        key="input"
        v-on:change-face="changeFace"
      />
      <SlideInputBandit
        v-else
        key="inputBandit"
        v-on:change-face="changeFace"
      />
    </transition>
  </div>
</template>

<script>
import SlideText from '../components/SlideText.vue';
import SlideInput from '../components/SlideInput.vue';
import SlideInputBandit from '../components/SlideInputBandit.vue';

export default {
  name: 'index',
  data: function() {
    return {face: 0};
  },
  components: {
    SlideText,
    SlideInput,
    SlideInputBandit,
  },
  methods: {
    changeFace(face) {
      this.face = face;
    },
  },
};
</script>

<style>
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
