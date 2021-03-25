<template>
  <div>
    <label for="todo-Item"></label>
    <input id="todo-Item" type="text" @input="handleEvent" />
    <button type="button" @click="addTodo">추가하기</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    todoItem: {
      type: String,
    },
  },
  methods: {
    handleEvent(e: any) {
      this.$emit("input", e.target.value);
    },
    addTodo() {
      console.log("클릭");
    },
  },
});
</script>

<style scoped></style>
