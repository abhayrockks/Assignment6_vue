<template>
  <div>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <form v-on:submit.prevent="addData">
              <div>
                <input type="file" accept="image/*" @change="onChange" />
              </div>
              <br />
              <div>
                <input type="text" v-model="animal" />
              </div>
              <br />
              <button>Add</button>
              <button id="cancel" @click="cancel">Cancel</button>
            </form>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Create",
  data() {
    return {
      url: null,
      animal: "",
      id: 1,
    };
  },

  methods: {
    onChange(event) {
      event.preventDefault();
      const file = event.target.files[0];
      this.url = URL.createObjectURL(file);
    },
    addData() {
      const payload = {
        preview: this.url,
        animal: this.animal,
      };
      this.$store.commit("addData", {
        id: this.id++,
        payload,
      });
      // this.id = this.id++;
      this.$emit("close");
      this.animal = "";
      this.url = null;
    },
    cancel() {
      this.$emit("close");
      this.animal = "";
      this.url = null;
    },
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

#cancel {
  margin-left: 10px;
}
</style>