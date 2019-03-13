<template>
  <div class="CubeInput">
    <input type="text" v-model="input" />
    <h1 @click="$emit('change-face', 2)">Hello {{ input }}!</h1>
  </div>
</template>

<script>
  export default {
    name: 'CubeInput',
    data: function() {
      return {input: 'World'};
    },
  };
</script>
