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

    <v-btn color="success" @click="addCart">
      <v-icon dark left>
        mdi-content-save
      </v-icon>
      Save
    </v-btn>
  </v-card-text>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    dialog: {
      fields: {
        date: new Date().toISOString().substr(0, 10),
        textInput: null,
        step: 1,
      },
    },
    carts: [],
    
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
    reset(){
      // this.dialog.fields.textInput = '';
      // this.dialog.fields.date = new Date().toISOString().substr(0, 10);
      // this.tasks.step = this.dialog.fields.step;
      // this.$v.$reset();
      
      this.$router.push("/");
    },
    addCart() {
      // убедиться, что было что-либо введено
      // if (!this.dialog.fields) {
      //   return;
      // }
      // const ask = {
      //   textInput: this.tasks.textInput,
      //   date: this.tasks.date,
      // };
      this.carts.push(this.tasks);
      // this.dialog.fields = '';
      this.saveCarts();
      // this.$toast.success("Saved successfully!", {
      //   timeout: 3000
      // });
      this.reset();   
    },
    saveCarts() {
      const parsed = JSON.stringify(this.carts);
      localStorage.setItem('carts', parsed);
    },
  },
  mounted(){
    if (localStorage.getItem('carts')) {
      try {
        this.cats = JSON.parse(localStorage.getItem('carts'));
      } catch(e) {
        localStorage.removeItem('carts');
      }
    }
  }
};
</script>
