<template>
  <div>
    <label for="todo-Item"></label>
    <input id="todo-Item" type="text" />
    <button type="button" @click="addTodo">추가하기</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    addTodo() {
      console.log("클릭");
    },
  },
});
</script>

<style scoped></style>
