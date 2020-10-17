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
          <tr v-for="(item, i) in desserts" :key="i">
            <td>{{ item.name }}</td>
            <td>{{ item.date }}</td>
            <td width="5px"><v-checkbox v-model="checkbox1"></v-checkbox></td>
            <td><v-btn class="red">Удалить</v-btn></td>
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
export default {
  data() {
    return {
      desserts: [
        {
          name: "Frozen Yogurt",
          date: "15.09.2020",
        },
        {
          name: "Frozen Yogurt",
          date: "15.09.2020",
        },
        {
          name: "Frozen Yogurt",
          date: "15.09.2020",
        },
      ],
      checkbox1: false,
    };
  },
  methods: {
    add(){
      this.$router.push("/linkTwo");
    }
  },
};
</script>
