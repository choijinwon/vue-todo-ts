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
      <div>
        <ul>
          <TodoListItem
            v-for="(list, index) in textItem"
            :key="index"
            :index="index"
            :itemList="list"
          ></TodoListItem>
        </ul>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoInput from "./components/TodoInput.vue";
import TodoListItem from "./components/TodoListItem.vue";

const KEY_GEN = "v8_1111";
const crud = {
  fetch() {
    const value = localStorage.getItem(KEY_GEN) || "[]";
    const relust = JSON.parse(value);
    return relust;
  },
  save(value: any) {
    const todoItem = JSON.stringify(value);
    localStorage.setItem(KEY_GEN, todoItem);
  },
};
export default Vue.extend({
  components: { TodoInput, TodoListItem },
  data() {
    return {
      textInput: "",
      textItem: [] as any[],
    };
  },
  methods: {
    updateText(value: string) {
      this.textInput = value;
    },
    addTodoItems() {
      const value = this.textInput;
      if (value == "") {
        return false;
      }
      this.textItem.push(value);
      crud.save(this.textItem);
      this.initText();
    },
    initText() {
      this.textInput = "";
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
