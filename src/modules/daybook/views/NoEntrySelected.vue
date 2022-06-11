<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">Nada seleccionado</h1>
  </div>
  <create-entry @on:click="createNewEntry"></create-entry>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    CreateEntry: defineAsyncComponent(() =>
      import("../components/CreateEntry.vue")
    ),
  },
  methods: {
    createNewEntry() {
      this.$router.push({ name: "entry", params: { id: "new" } });
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  height: 100%;
  width: 50%;
}
</style>
