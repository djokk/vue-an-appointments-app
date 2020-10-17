import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        one: [{
            'step': 1
        }],
        tasks: [{
            'textInput': '',
            'date': '',
        }]
    },
    mutations: {
        update(state, payload) {
            // state.textInput.push(payload);
            // state.tasks = payload;
            // state.appointments.push(payload)
            state.tasks.push(payload)
        },
        updateStep(state, payload_step) {
            state.one = payload_step
        }
    },
    actions: {
        UPDATE({ commit }, payload) {
            commit('update', payload)
        },
        UPDATE_STEP({ commit }, payload_step) {
            commit('updateStep', payload_step)
        },
    },
    getters: {
        tasks(state) {
            return state.tasks
        },
        one(state) {
            return state.one
        }
    }
})