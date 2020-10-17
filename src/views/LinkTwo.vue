<template>
  <v-stepper v-model="one.step" max-width="300px">
    <v-stepper-header>
      <v-stepper-step :complete="step > 1" step="1">
        Информация
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="step > 2" step="2">
        Подтверждение
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <OneInfo />
      </v-stepper-content>
    </v-stepper-items>

    <v-stepper-items>
      <v-stepper-content step="2">
        <TwoInfo />
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import OneInfo from "../components/OneInfo";
import TwoInfo from "../components/TwoInfo";
import { mapGetters } from "vuex";

export default {
  components: {
    OneInfo,
    TwoInfo,
  },
  data: () => ({
    step: 1,
  }),
  computed: {
    // tasks() {
    //   return this.$store.getters.tasks;
    // },
    ...mapGetters([
      'tasks',
      'one'
    ])
  },
  methods: {},
};
</script>
