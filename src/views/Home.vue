<template>
  <v-app>
    <v-simple-table app>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Названия
            </th>
            <th class="text-left">
              Дата
            </th>
            <th class="text-left">Завершить</th>
            <th class="text-left"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(appointment, i) in appointments" :key="i">
            <td>{{ appointment.textInput }}</td>
            <td>{{ appointment.date }}</td>
            <td width="5px"><v-checkbox 
              hide-details
              class="shrink mr-2 mt-0"
              color="success"
              :value="appointment.check"
              @click="checkAppointmentDone(appointment.id)"
            ></v-checkbox></td>
            <td><v-btn 
              class="red"
              @click="deleteAppointment(appointment.id)"
            >Удалить</v-btn></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-fab-transition>
      <v-btn
        @click= "add()"
        color="teal darken-1"
        class="mx-5"
        dark
        fixed
        bottom
        right
        fab
        large
        elevation="9"
      >
        <v-icon dark>
          mdi-plus
        </v-icon>
      </v-btn>
    </v-fab-transition>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({
  }),
  computed:{
    ...mapGetters({
      appointments: 'appointments',
    }),
  },
  mounted(){
    this.LOAD_LOCALSTORAGE()
  },
  methods: {
    add(){
      this.$router.push("/linkTwo");
    },
    ...mapActions({
      LOAD_LOCALSTORAGE: 'LOAD_LOCALSTORAGE',
      SAVE_LOCALSTORAGE: 'SAVE_LOCALSTORAGE',
      DELETE_LOCALSTORAGE: 'DELETE_LOCALSTORAGE',
      CHECK_DONE_LOCALSTORAGE: 'CHECK_DONE_LOCALSTORAGE'
    }),
    checkAppointmentDone(id){
      this.CHECK_DONE_LOCALSTORAGE(id)
    },
    deleteAppointment(id){
      
        this.DELETE_LOCALSTORAGE(id)
      
    },
  },
};
</script>
