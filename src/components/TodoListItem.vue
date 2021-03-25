<template>
  <div>
    <li>
      {{ index + 1 }} :
      {{ itemList }}
      <button type="button" @click="removeDlete">삭제</button>
    </li>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    itemList: {
      type: String,
    },
    index: {
      type: Number,
    },
  },
  methods: {
    removeDlete() {
      this.$emit("remove");
    },
  },
});
</script>

<style scoped></style>
