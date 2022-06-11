<script>
import { defineAsyncComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    NavBar: defineAsyncComponent(() => import("../components/Navbar.vue")),
    EntryList: defineAsyncComponent(() =>
      import("../components/EntryList.vue")
    ),
    EntryContent: defineAsyncComponent(() =>
      import("../components/EntryContent.vue")
    ),
  },
  computed: {
    ...mapState("journal", ["isLoading"]),
  },
  methods: {
    ...mapActions("journal", ["loadEntries"]),
  },
  created() {
    this.loadEntries();
  },
};
</script>

<template>
  <div class="row justify-content-md-center" v-if="isLoading">
    <div class="col-3 text-center">
      <h3 class="mt-2">
        <i class="fa fa-spin fa-sync"></i>
        Loading...
      </h3>
    </div>
  </div>
  <div class="content" v-else>
    <nav-bar></nav-bar>
    <entry-content></entry-content>
    <entry-list></entry-list>
  </div>
  <!-- <div class="d-flex">
    <div class="col-4">
      <entry-list></entry-list>
    </div>
    <div class="col">
      <router-view></router-view>
    </div>
  </div> -->
</template>

<style scoped>
.content {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #f2f7ff;
}
</style>
