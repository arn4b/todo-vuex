<template>
  <GetTodo></GetTodo>
  <CurrentTodos></CurrentTodos>
  <CompletedTodos></CompletedTodos>
</template>

<script>
import GetTodo from './components/GetTodo.vue'
import CompletedTodos from './components/CompletedTodos.vue'
import CurrentTodos from './components/CurrentTodos.vue'

export default {
  name: 'App',
  components: {
    GetTodo, 
    CompletedTodos,
    CurrentTodos
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
