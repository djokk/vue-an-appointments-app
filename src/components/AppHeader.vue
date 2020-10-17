<template>    
    <v-navigation-drawer
      v-model="drawer"
      app
      class="pt-4"
      color="grey lighten-3 text-center"
      width="150"
    >

      <v-btn v-for="link in links"
        :key="link.url"
        :to="link.url" 
        text 
        class="mx-auto mb-9" 
        width="100%" 
        height="50px" 
        permanent
      >
        {{ link.title }}
      </v-btn>

    </v-navigation-drawer>

</template>

<script>
export default {
  data: () => ({
    links: [
      {title: 'Страница 1', url: '/'},
      {title: 'Страница 2', url: '/linktwo'},
    ],
    drawer: true
  })
};
</script>

<style lang="scss" scoped></style>
