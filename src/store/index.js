import Vue from 'vue'
import Vuex from 'vuex'
import FlashMessage from "@smartweb/vue-flash-message";

Vue.use(Vuex)

Vue.use(FlashMessage, {
    name: "flashMessage",
    tag: "FlashMessage",
    time: 8000,
    strategy: "single"
});

export default new Vuex.Store({
    state: {
        one: [{
            'step': 1
        }],
        tasks: [{
            'textInput': '',
            'date': '',
            // 'step': 2
        }],
        appointments: [{
            'textInput': 'dsadd',
            'date': '2020-05-30',
        }],
    },
    mutations: {
        update(state, payload) {
            // state.textInput.push(payload);
            state.tasks = payload;
            // state.appointments.push(payload)
            // state.tasks.push(payload)

        },
        updateStep(state, payload_step) {
            state.one = payload_step
        },
        addAppointment(state, payload_local) {
            state.appointments.push(payload_local)
                // state.appointments = JSON.parse(payload_local)
        },
        save_localstorage(state) {
            localStorage.setItem('appointments', JSON.stringify(state.appointments))
            this._vm.flashMessage.success({
                message: "Saved successfully!",
                time: 1000,
            });
        }

    },
    actions: {
        UPDATE({ commit }, payload) {
            commit('update', payload)
        },
        UPDATE_STEP({ commit }, payload_step) {
            commit('updateStep', payload_step)
        },
        SAVE_LOCALSTORAGE({ commit }, payload_local) {
            commit('addAppointment', payload_local)
            commit('save_localstorage')
        },
    },
    getters: {
        tasks(state) {
            return state.tasks
        },
        one(state) {
            return state.one
        },
        appointments(state) {
            return state.appointments
        }
    }
})