<template>
  <div>
    <div>
      <v-btn><router-link to="/" exact>Random</router-link></v-btn>
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
        { text: 'Notes', value: 'notes' }
      ],
      rolls: [
        {
          restaurant: 'Harumi',
          roll: 'Eternal Sunshine',
          rating: '5/5',
          notes: ''
        },
        {
          restaurant: 'Harumi',
          roll: 'I Love You',
          rating: '5/5',
          notes: ''
        },
        {
          restaurant: 'Zum Sushi',
          roll: 'Spiderman',
          rating: '5/5',
          notes: ''
        },
        {
          restaurant: 'Zum Sushi',
          roll: 'Hawaiian',
          rating: '5/5',
          notes: 'Very tasty for the price'
        }
      ]

      
    })
  }
</script>

<style>

</style>
