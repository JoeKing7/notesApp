<template>
  <template v-if="entry">
    <div class="entry-title d-flex justify-content-bewteen p-2">
      <span class="text-success fs-3 fw-bold">{{ day }}</span>
      <span class="mx-1 fs-3">{{ month }}</span>
      <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>

      <div class="">
        <input
          type="file"
          @change="onSelectedImage"
          ref="imageSelector"
          v-show="false"
          accept="image/png, image/jpg, image/jpeg, image/svg"
        />
        <button
          class="btn btn-danger mx-2"
          type="button"
          v-on:click="onDeleteEntry"
          v-if="entry.id"
        >
          <i class="fa fa-trash-alt"></i>
        </button>
        <button class="btn btn-primary" type="butto" @click="onSelectImage">
          <i class="fa fa-upload"></i>
        </button>
      </div>
    </div>

    <hr />
    <div class="d-flex flex-column px-3 h-75">
      <textarea v-model="entry.text" placeholder="¿Qué sucedió hoy?"></textarea>
    </div>

    <img
      v-if="entry.picture && !localImage"
      :src="entry.picture"
      alt="entry-picture"
      class="img-thumbail"
    />
    <img
      v-if="localImage"
      :src="localImage"
      alt="entry-picture"
      class="img-thumbail"
    />
  </template>
  <create-entry icon="fa-save" @on:click="saveEntry"></create-entry>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
import Swal from "sweetalert2/dist/sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import getDayMonthYear from "../helpers/getDayMonthYear";
import uploadImage from "../helpers/uploadImage";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    CreateEntry: defineAsyncComponent(() =>
      import("../components/CreateEntry.vue")
    ),
  },
  created() {
    this.loadEntry();
  },
  data() {
    return {
      entry: null, //estado
      localImage: null,
      file: null,
    };
  },
  computed: {
    ...mapGetters("journal", ["getEntryById"]),
    day() {
      const { day } = getDayMonthYear(this.entry.date);
      return day;
    },
    month() {
      const { month } = getDayMonthYear(this.entry.date);
      return month;
    },
    yearDay() {
      const { yearDay } = getDayMonthYear(this.entry.date);
      return yearDay;
    },
  },
  methods: {
    ...mapActions("journal", ["updateEntry", "createEntry", "deleteEntry"]),
    loadEntry() {
      let entry;

      if (this.id === "new") {
        entry = {
          text: "",
          date: new Date().getTime(),
        };
      } else {
        entry = this.getEntryById(this.id);
        if (!entry) return this.$router.push({ name: "no-entry" });
      }

      this.entry = entry;
    },
    async saveEntry() {
      new Swal({
        title: "Espere por favor",
        allowOutsideClick: false,
      });
      Swal.showLoading();
      const pict = await uploadImage(this.file);
      this.entry.picture = pict;
      if (this.entry.id) {
        //update
        await this.updateEntry(this.entry);
      } else {
        const idNewEntry = await this.createEntry(this.entry);
        this.$router.push({ name: "entry", params: { id: idNewEntry } });
      }
      this.file = null;
      Swal.fire("Guardado", "Entrada registrada con éxito.", "success");
    },
    async onDeleteEntry() {
      const { isConfirmed } = await Swal.fire({
        title: "¿Está seguro?",
        text: "Una vez borrado, no se puede recuperar",
        showDenyButton: true,
        confirmButtonText: "Si, estoy seguro.",
      });

      if (isConfirmed) {
        new Swal({
          title: "Espere por favor",
          allowOutsideClick: false,
        });
        Swal.showLoading();
        this.deleteEntry(this.entry.id);
        this.$router.push({ name: "no-entry" });
        Swal.fire("Eliminado", "", "success");
      }
    },
    onSelectedImage(event) {
      const file = event.target.files[0];
      if (!file) {
        this.localImage = null;
        this.file = null;
        return;
      }
      this.file = file;
      const fr = new FileReader();
      fr.onload = () => (this.localImage = fr.result);
      fr.readAsDataURL(file);
    },
    onSelectImage() {
      this.$refs.imageSelector.click();
    },
  },
  watch: {
    id() {
      this.loadEntry();
    },
  },
};
</script>

<style lang="scss" scoped>
textarea {
  position: relative;
  width: 95%;
  border: none;
  height: 90%;

  &:focus {
    outline: none;
  }
}

img {
  width: 200px;
  position: fixed;
  bottom: 50px;
  right: 28%;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>
