<template>
  <v-app id="inspire">
    <!-- <AppHeader /> -->
    <v-main>
      <router-view />
    </v-main>

    
  </v-app>
</template>

<script>
// import AppHeader from "@/components/AppHeader";
// import Home from "@/views/Home";

export default {
  name: "App",
  components: {
    // AppHeader
  },
  methods: {
    add(){
      this.$router.push("/linkTwo");
    }
  }
};
</script>
