// import Vue from 'vue'
// import Vuex from 'vuex'
import { createStore } from 'vuex'

// Vue.use(Vuex)

export default createStore({

    state: {
        tasks: [],
        newTask: ''
    },

    mutations: { 
        GET_TODO(state, task) {
            state.newTask = task
        },

        ADD_TODO(state) {
            state.tasks.push({
                body: state.newTask,
                completed: false
            })
        },

        EDIT_TODO(state, task) {
            var tasks = state.tasks
            tasks.splice(tasks.indexOf(task), 1)
            state.tasks = tasks
            state.newTask = task.body
        },

        REMOVE_TODO(state, task){
            var tasks = state.tasks
            tasks.splice(tasks.indexOf(task), 1)
        },

        COMPLETE_TODO(state, task){
        task.completed = !task.completed
        },

        CLEAR_TODO(state){
        state.newTask = ''
        }
    },
    actions: { 
        getTodo({commit}, todo){
            commit('GET_TODO', todo)
        },
        addTodo({commit}){
            commit('ADD_TODO')
        },
        editTodo({commit}, todo){
            commit('EDIT_TODO', todo)
        },
        removeTodo({commit}, todo){
            commit('REMOVE_TODO', todo)
        },
        completeTodo({commit}, todo){
            commit('COMPLETE_TODO', todo)
        },
        clearTodo({commit}){
            commit('CLEAR_TODO')
        }
    },

    getters: {
        newTask: state => state.newTask,
        tasks: state => state.tasks.filter((task) => {return  !task.completed}),},
        completedTasks: state => state.tasks.filter((task) => {return task.completed})
    }
)