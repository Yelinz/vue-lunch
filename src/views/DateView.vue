<template>
  <date-picker v-model="date" lang="en"></date-picker>
</template>

<script>
import DatePicker from 'vue2-datepicker';

export default {
  name: 'DateView',
  components: {DatePicker},
  computed: {
    date: {
      get: function() {
        return this.$store.state.date;
      },
      set: function(value) {
        this.$store.commit('setDate', {date: value});
      },
    },
  },
};
</script>
