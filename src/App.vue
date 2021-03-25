<template>
  <div>
    <header>
      <h1>타입스크립트 TodoList</h1>
      <TodoInput :todoItem="textInput"></TodoInput>
    </header>
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
});
</script>

<style scoped></style>
