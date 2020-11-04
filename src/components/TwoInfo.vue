<template>
  <v-card-text>
    <v-text-field
      color="blue"
      label="Полное имя"
      filled
      readonly
      v-model="tasks.textInput"
    ></v-text-field>
    <v-menu
      :close-on-content-click="false"
      min-width="290px"
      v-model="dialog.fields.menu"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          label="Выбран дата"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
          :value="tasks.date"
        ></v-text-field>
      </template>
    </v-menu>

    <v-btn text @click="back">
      <v-icon dark left>
        mdi-arrow-left
      </v-icon>
      Back
    </v-btn>

    <v-btn color="success" @click="saveAppointment">
      <v-icon dark left>
        mdi-content-save
      </v-icon>
      Save
    </v-btn>
    <FlashMessage/>
  </v-card-text>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    dialog: {
      fields: {
        date: new Date().toISOString().substr(0, 10),
        textInput: null,
        step: 1,
      },
    },
    alert: false,
    
  }),
  computed: {
    ...mapGetters([
      'tasks',
      'one'
    ])    
  },
  methods: {
    back() {
      const step = {
        step: this.dialog.fields.step,
      };
      this.$store.dispatch("UPDATE_STEP", step);
    },
    ClearInstance(){
      this.one.step = this.dialog.fields.step;      
      this.$router.push("/");
    },
    ...mapActions({
      SAVE_LOCALSTORAGE: 'SAVE_LOCALSTORAGE',
    }),
    saveAppointment(){
      this.SAVE_LOCALSTORAGE()
      
      setTimeout(()=>{
        this.ClearInstance()
      },1500)
    }
  },
  mounted(){}
};
</script>

