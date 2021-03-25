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

const KEY_GEN = "v8_1111";
const crud = {
  fetch() {
    const value = localStorage.getItem(KEY_GEN) || "[]";
    const relust = JSON.parse(value);
    return relust;
  },
};
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
      //임시로 값 셋팅테스트
      localStorage.setItem(value, value);
    },
    fetchTodoItem() {
      crud.fetch();
    },
  },
  created() {
    this.fetchTodoItem();
  },
});
</script>

<style scoped></style>
