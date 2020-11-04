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
            'check': false
        }],
        appointments: [],
    },
    mutations: {
        updateStep(state, payload_step) {
            state.one = payload_step
        },
        update(state, payload) {
            state.tasks = payload
        },
        setAppointments(state, stored_payload) {
            state.appointments = stored_payload
        },
        save_localstorage(state) {
            state.appointments.push(state.tasks)

            localStorage.setItem('appointments', JSON.stringify(state.appointments))

            this._vm.flashMessage.success({
                message: "Saved successfully!",
                time: 1000,
            });
        },
        checkDoneAppointment(state, id) {
            state.appointments = [...state.appointments].map((item) => {
                if (item.id === id) {
                    let { check, ...rest } = item
                    return { check: !check, ...rest }
                }
                return item
            })
            localStorage.setItem('appointments', JSON.stringify(state.appointments))
        },
        deleteAppointment(state, id) {
            state.appointments = [...state.appointments].filter((item) => item.id !== id)
            localStorage.setItem('appointments', JSON.stringify(state.appointments))

        }
    },
    actions: {
        UPDATE_STEP({ commit }, payload_step) {
            commit('updateStep', payload_step)
        },
        UPDATE({ commit }, payload) {
            commit('update', payload)
        },
        LOAD_LOCALSTORAGE({ commit }) {
            if (localStorage.getItem('appointments') !== null && localStorage.getItem('appointments') !== 'undefined') {
                let appointmentsStored = JSON.parse(localStorage.getItem('appointments'))
                commit('setAppointments', appointmentsStored)
            } else {
                commit('setAppointments', [])
            }
        },
        SAVE_LOCALSTORAGE({ commit }) {
            commit('save_localstorage')
        },
        CHECK_DONE_LOCALSTORAGE({ commit }, id_appointment) {
            // commit('setLoading', { loaderName: 'isSavingLoading', loading_bool: true })
            commit('checkDoneAppointment', id_appointment)
                // Demonstrate actions loading 
                // setTimeout(() => commit('setLoading', { loaderName: 'isSavingLoading', loading_bool: false }), 700)
        },
        DELETE_LOCALSTORAGE({ commit }, id_appointment) {
            // commit('setLoading', { loaderName: 'isSavingLoading', loading_bool: true })
            commit('deleteAppointment', id_appointment)
                // Demonstrate actions loading 
                // setTimeout(() => commit('setLoading', { loaderName: 'isSavingLoading', loading_bool: false }), 700)
        }
    },
    getters: {
        one(state) {
            return state.one
        },
        tasks(state) {
            return state.tasks
        },
        // appointments(state) {
        //     return state.appointments
        // }
        appointments: state => state.appointments,
    }
})