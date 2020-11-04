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
import { mapGetters } from "vuex";

export default {
  data: () => ({
    dialog: {
      fields: {
        menu: false,
        step: 2,
        date: new Date().toISOString().substr(0, 10),
        textInput: "",
        check: false,
        id: new Date().getTime()
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
      const step = {
        step: this.dialog.fields.step
      }

      this.$store.dispatch('UPDATE_STEP', step);

      const task = {
        id: this.dialog.fields.id,
        textInput: this.dialog.fields.textInput,
        date: this.dialog.fields.date,
        check: this.dialog.fields.check,
      }

      this.$store.dispatch('UPDATE', task);
    }
  },
};
</script>
