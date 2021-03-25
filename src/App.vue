<template>
  <div>
    <header>
      <h1>타입스크립트 TodoList</h1>
    </header>
    <main>
      <TodoInput
        :todoItem="textInput"
        @input="updateText"
        @add="addTodoItems"
      ></TodoInput>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoInput from "./components/TodoInput.vue";

export default Vue.extend({
  components: { TodoInput },
  data() {
    return {
      textInput: "",
    };
  },
  methods: {
    updateText(value: string) {
      this.textInput = value;
    },
    addTodoItems() {
      const value = this.textInput;
      localStorage.setItem(value, value);
    },
  },
});
</script>

<style scoped></style>
