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
        appointments: [{
            'textInput': '',
            'date': '',
            'check': false
        }],
    },
    mutations: {
        updateStep(state, payload_step) {
            state.one = payload_step
        },
        update(state, payload) {
            // state.textInput.push(payload);
            state.tasks = payload
                // state.appointments.push(payload)
                // state.tasks.push(payload)
        },
        // addAppointment(state) {
        //     // state.appointments.push(state.tasks)
        //     // state.appointments.push(payload_local)
        //     // state.appointments = JSON.parse(payload_local)
        // },
        save_localstorage(state) {
            // localStorage.setItem('appointments', JSON.stringify(state.appointments))
            if (localStorage.getItem('appointments') !== null && localStorage.getItem('appointments') !== 'undefined') {
                // state.appointments.push(state.tasks)
                // , appointments_payload
                // let appointmentsStored = JSON.parse(localStorage.getItem('appointments'))
                state.appointments = JSON.parse(localStorage.getItem('appointments'))

                // appointmentsStored.push(appointments_payload)
                // appointmentsStored.push(state.appointments)
                state.appointments.push(state.tasks)
                    // appointmentsStored.push(state.tasks)

                // localStorage.setItem('appointments', JSON.stringify(appointmentsStored))
                localStorage.setItem('appointments', JSON.stringify(state.appointments))

                // state.appointments = appointmentsStored

            } else {
                console.log(Error)
            }
            this._vm.flashMessage.success({
                message: "Saved successfully!",
                time: 1000,
            });
        }

    },
    actions: {
        UPDATE_STEP({ commit }, payload_step) {
            commit('updateStep', payload_step)
        },
        UPDATE({ commit }, payload) {
            commit('update', payload)
        },
        SAVE_LOCALSTORAGE({ commit }) {
            // commit('addAppointment', payload_local)
            commit('save_localstorage')
        },
    },
    getters: {
        one(state) {
            return state.one
        },
        tasks(state) {
            return state.tasks
        },
        appointments(state) {
            return state.appointments
        }
    }
})