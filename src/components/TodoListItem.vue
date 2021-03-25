<template>
  <div>
    <li>{{ itemList }}</li>
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
});
</script>

<style scoped></style>
