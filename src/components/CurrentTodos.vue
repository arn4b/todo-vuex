<template>
    <div id="current-todos" class="container">
        <!-- {{tasks}} -->
        <h3 v-if="tasks.length > 0">Current({{tasks.length}})</h3>
        <ul class="list-group">
            <li class="list-group-item" v-for="task in tasks" :key="task.id">
                <h4>{{task.body}}</h4>
            <div class="btn-group justify">
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
                this.$store.commit('EDIT_TODO', task)
            },

            complete(task) {
                this.$store.commit('COMPLETE_TODO', task)
                // console.log(this.$store.state.completed)
            },

            remove(task) {
                this.$store.commit('REMOVE_TODO', task)
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
    .justify{
        display: flex;
        justify-content: space-evenly;
        margin: 1rem 0;
    }
</style>