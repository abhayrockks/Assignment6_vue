<template>
<div>
  <header>
    <h3>Animals of the Kingdom</h3>
    <Create v-show="showModal" @close="showModal = false" />
    <button id="show-modal" @click="showModal = true">Create</button>
  </header>

  <body>
    <div class="col-sm-3" v-for="(item,index) in catalogue" :key="index">
      <button id="delete" v-on:click.prevent="deleteData(item.id)"></button>
      <div class="thumbnail">
        <img :src="item.payload.preview" v-if="item.payload.preview" />
        <div class="caption">{{item.payload.animal}}</div>
      </div>
    </div>
  </body>
</div>
</template>

<script>
import Create from "./Create.vue";
import { mapGetters } from "vuex";
export default {
  name: "Display",
  components: {
    Create,
  },
  data() {
    return {
      showModal: false,
    };
  },

  computed: {
    ...mapGetters({
      catalogue: "allData",
    }),
  },

  methods: {
    deleteData(id) {
      this.$store.commit("deleteData", id);
    },
  },
};
</script>

<style scoped>
header {
  padding: 20px;
}

#show-modal {
  float: right;
  margin-right: 40px;
}

#delete {
  float: right;
  box-sizing: border-box;
  width: 15px;
  height: 15px;
  border-width: 2px;
  border-style: solid;
  border-color: red;
  border-radius: 100%;
  background: -webkit-linear-gradient(
      -45deg,
      transparent 0%,
      transparent 46%,
      white 46%,
      white 56%,
      transparent 56%,
      transparent 100%
    ),
    -webkit-linear-gradient(45deg, transparent 0%, transparent 46%, white 46%, white
          56%, transparent 56%, transparent 100%);
  background-color: red;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
}
</style>