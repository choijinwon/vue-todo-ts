<template>
  <div>
    <header>
      <h1>타입스크립트 TodoList</h1>
    </header>
    <main>
      <TodoInput :todoItem="textInput" @input="updateText"></TodoInput>
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
  },
});
</script>

<style scoped></style>
