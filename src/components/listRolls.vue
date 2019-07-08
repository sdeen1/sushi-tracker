<template>
  <div>
    <div>
      <v-btn><router-link to="/random" exact>Random</router-link></v-btn>
      <v-btn><router-link to="/add" exact>Add</router-link></v-btn>
    </div>
    <v-data-table :headers="headers" :items="rolls">
      <template v-slot:items="props">
        <td>{{ props.item.restaurant }}</td>
        <td>{{ props.item.roll }}</td>
        <td>{{ props.item.rating }}</td>
        <td>{{ props.item.notes }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  import db from '@/fb'
  export default {
    data: () => ({
      headers: [
        {
          text: 'Restaurant',
          align: 'left',
          sortable: true,
          value: 'restaurant'
        },
        { text: 'Roll', value: 'roll' },
        { text: 'Rating', value: 'rating' },
        { text: 'Notes', value: 'notes' },  
      ],
      rolls: []
    }),
    methods: {

    },
    created() {
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
