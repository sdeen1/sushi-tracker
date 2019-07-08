<template>
  <v-app>
    <v-container>
      <v-layout row>
        <h1>My Sushi Rolls</h1>
      </v-layout>
      <v-layout column>
        <router-view></router-view>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import ListRolls from './components/listRolls.vue'
import AddRoll from './components/addRoll.vue'

export default {
  name: 'App',
  components: {
    ListRolls,
    AddRoll
  },
  data () {
    return {
      //
    }
  }
}
</script>
