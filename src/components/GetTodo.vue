<template>
    <div id="get-todo" class="container">
        <div class="row ">
            <h3>Todo List w/ Vue & VueX</h3>
            <input class="input col-9"
                :value="newTask"
                @change="getTask"
                placeholder="I need to...">
            <button class="btn primary col-3" @click="addTask">Add Todo</button>
        </div>
        <!-- <h3>Hello</h3> -->
    </div>
</template>

<script>
    export default {
        methods: {
            getTask(e){
                // this.$store.dispatch('getTodo', e.target.value)
                this.$store.commit('GET_TODO', e.target.value)
            },
            addTask(){
                // this.$store.dispatch('addTodo')
                // this.$store.dispatch('clearTodo')

                this.$store.commit('ADD_TODO')
                this.$store.commit('CLEAR_TODO')
            }
        },
        computed: {
            newTask(){
                return this.$store.getters.newTask
            }
        }
    }
</script>

<style scoped>

</style>