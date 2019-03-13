<template>
  <div class="CubeInputBandit">
    <input type="text" v-model="input" />
    <h1>Hello {{ input }}!</h1>
    <h1>Räubersprache:</h1>
    <h1 @click="$emit('change-face', 0)">Hohelollolo {{ banditify }}!</h1>
  </div>
</template>

<script>
  export default {
    name: 'CubeInputBandit',
    data: function() {
      return {input: 'World'};
    },
    computed: {
      banditify: function() {
        const consonants = ['a', 'e', 'i', 'o', 'u'];
        let banditified = '';
        this.input.split('').forEach(e => {
          if (!consonants.includes(e.toLowerCase())) {
            banditified += `${e}o${e}`;
          } else {
            banditified += e;
          }
        });
        return banditified;
      },
    },
  };
</script>
