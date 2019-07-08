<template>
  <div>
    <v-form>
        <v-text-field v-model="roll.restaurant" label="Restaurant"></v-text-field>
        <v-text-field v-model="roll.rollName" label="Roll Name"></v-text-field>
        <v-rating v-model="roll.rating" length="10"></v-rating>
        <span>Rating: {{ roll.rating }}/10</span>
        <v-textarea name="roll.notes" label="Notes"></v-textarea>
        <v-btn @click="submit" class="success">Add Roll</v-btn>
    </v-form>
  </div>
</template>

<script>
import db from '@/fb'

  export default {
    data: () => ({        
        roll: {
          restaurant: "",
          rollName: "",
          rating: "",
          notes: ""
        }
    }),
    methods: {
        submit: function() {
          console.log(this.roll);
          const project = {
            restaurant: this.roll.restaurant,
            roll: this.roll.rollName,
            rating: this.roll.rating,
            notes: this.roll.notes
          }
          db.collection('rolls').add(project);
        }
    }
  }
</script>

<style>

</style>
