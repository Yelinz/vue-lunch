<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2 v-if="date">You selected the {{ date.toLocaleDateString('de') }}</h2>
  </div>
</template>

<script>
export default {
  name: 'CubeText',
  props: {
    msg: String,
  },
  computed: {
    date() {
      return this.$store.state.date;
    },
  },
};
</script>
