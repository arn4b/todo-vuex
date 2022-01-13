<template>
    <div id="completed-todos">
        {{completed}}
        <h3 v-if="completed.length > 0">Completed({{completed.length}})</h3>
        <ul class="list-group">
            <li class="list-group-item" v-for="task in completed" :key="task.id">
                {{task.body}}
                <button type="button" @click="remove(task)" class="btn btn-default btn-sm">Remove</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        methods : {
            remove(task) {
                this.$store.dispatch('removeTodo', task)
            },
        },
        computed: {
            completed(){
                return this.$store.getters.completedTasks
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>