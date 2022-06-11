<template>
  <h1>HOME PAGE</h1>
  <button class="btn btn-primary" @click="goToDayBook">Go to Daybook</button>
</template>

<script>
export default {
  methods: {
    goToDayBook() {
      this.$router.push({ name: "no-entry" });
    },
  },
};
</script>
