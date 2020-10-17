<template>
  <v-card-text>
    <v-text-field label="Полное имя" v-model="dialog.fields.textInput"></v-text-field>
    <v-menu v-model="dialog.fields.menu" :close-on-content-click="false" max-width="290">
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="dialog.fields.date"
          clearable
          label="Выбор даты"
          :return-value.sync="dialog.fields.date"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
          @click:clear="dialog.fields.date = null"
        ></v-text-field>
      </template>
      <v-date-picker v-model="dialog.fields.date" @change="dialog.fields.menu = false"></v-date-picker>
    </v-menu>

    <v-btn text @click="exit()">
      <v-icon dark left>
        mdi-cancel
      </v-icon>
      Cancel
    </v-btn>

    <v-btn color="primary" @click="update">
      Next
      <v-icon dark right>
        mdi-arrow-right
      </v-icon>
    </v-btn>
  </v-card-text>
</template>

<script>
// import moment from "moment";
// import { format, parseISO } from "date-fns";
// import { mapGetters, mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  data: () => ({
    dialog: {
      fields: {
        date: new Date().toISOString().substr(0, 10),
        menu: false,
        textInput: "",
        step: 2,
      },
    },
  }),
  computed: {
    ...mapGetters([
      'tasks',
      'one',
      'appointments'
    ])    
  },
  methods: {
    exit() {
      this.$router.push("/");      
    },
    update(){
      console.log(this.tasks);
      
      const step = {
        step: this.dialog.fields.step
      }

      this.$store.dispatch('UPDATE_STEP', step);

      const task = {
        textInput: this.dialog.fields.textInput,
        date: this.dialog.fields.date,
      }

      this.$store.dispatch('UPDATE', task);


      console.log(task);
      console.log(this.appointments);
      //Reset
      // this.dialog.fields.textInput = '';
      // this.dialog.fields.date = new Date().toISOString().substr(0, 10);
    }
  },
};
</script>
