<template>
  <div>
    <div>
        <v-select :items="restaurants" label="Restaurant"></v-select>
      <v-btn @click="getRolls">Random</v-btn>
    </div>
    <p>Rolls found: {{ numOfRolls }}</p>
    <div>
        <ul>
            <li v-for="roll in rolls">{{roll}}</li>
        </ul>
    </div>
  </div>
</template>

<script>
  import db from '@/fb'
  export default {
    data: () => ({
      rolls: [],
      restaurants: ['Get list of restaurants here'],
      restuarant: '',
      numOfRolls: 0
    }),
    methods: {
        getRolls () {
            // query for rolls from database matching restaurant
            // pick 3 random rolls
            // update numOfRolls?
        }
    },
    created() {
        // find a way to grab list of restaurants
        db.collection('rolls').where('restaurant', '==', this.restuarant)
      db.collection('rolls').onSnapshot(res => {
        const changes = res.docChanges();
        changes.forEach(change => {
          if (change.type === 'added') {
            this.rolls.push({
              ...change.doc.data(), //... spreads all data fields into rolls
              id: change.doc.id
            })
          }
        });
      })
    }
  }
</script>

<style>

</style>
