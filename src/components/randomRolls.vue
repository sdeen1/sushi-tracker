<template>
  <div>
    <div>
        <v-select v-model="restuarant" :items="restaurants" label="Restaurant"></v-select>
      <v-btn @click="getRolls">Random</v-btn>
    </div>
    <p>Rolls found: {{ numOfRolls }}</p>
    <div>
      <v-list two-line subheader>
          <v-subheader>Your Rolls:</v-subheader>

          <template v-for="roll in rolls">
            <v-list-tile avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ roll.roll }} - {{ roll.rating }}/10</v-list-tile-title>
                <v-list-tile-sub-title>{{ roll.notes }}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
    </div>
    <p><router-link to="/">Go back to list</router-link></p>
  </div>
</template>

<script>
  import db from '@/fb'
  export default {
    data: () => ({
      allRolls: [],
      rolls: [],
      restaurants: [],
      restuarant: '',
      numOfRolls: 0
    }),
    methods: {
        getRolls () {
            // query for rolls from database matching restaurant, pick three random rolls
            db.collection('rolls').where('restaurant', '==', this.restuarant).get().then((snapshot) => {
              this.allRolls = snapshot.docs;
              this.numOfRolls = this.allRolls.length;
              this.rolls = [];
              //let usedNums = [];
              for (let i=0; i < Math.min(3, this.numOfRolls); i++) {
                console.log(this.rolls);
                let r = Math.floor(Math.random() * this.numOfRolls);
                  this.rolls.push({
                    ...this.allRolls[r].data()
                  })
              }
            })
        },
    },
    created() {
      // grab list of restaurants
      db.collection('restaurants').onSnapshot(res => {
        const changes = res.docChanges();
        changes.forEach(change => {
          if (change.type === 'added') {
            this.restaurants.push(change.doc.get('restaurant'))
          }
        });
      })
    }
  }
</script>

<style>

</style>
