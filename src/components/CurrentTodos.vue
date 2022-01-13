<template>
    <div id="current-todos" class="container">
        {{tasks}}
        <h3 v-if="tasks.length > 0">Current({{tasks.length}})</h3>
        <ul class="list-group">
            <li class="list-group-item" v-for="task in tasks" :key="task.id">
                {{task.body}}
            <div class="btn-group">
                <button type="button" @click="edit(task)" class="btn warning">Edit</button>
                <button type="button" @click="complete(task)" class="btn success">Complete</button>
                <button type="button" @click="remove(task)" class="btn error">Remove</button>
            </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        methods : { 
            edit(task) {
                this.$store.dispatch('editTodo', task)
            },

            complete(task) {
                this.$store.dispatch('completeTodo', task)
            },

            remove(task) {
                this.$store.dispatch('removeTodo', task)
            }
        },

        computed : {
            tasks() {
                return this.$store.getters.tasks
            }
        }
        
    }
</script>

<style scoped>

</style>