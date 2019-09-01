<template>
  <div>
    <h1>Selected</h1>
    <ul>
      <li v-for="box in selectedBoxes" :key="box.id" @click="toggleSelection(box)">
        {{ box.name }}
      </li>
    </ul>
    <h1>All</h1>
    <ul>
      <li v-for="box in unselectedBoxes" :key="box.id" @click="toggleSelection(box)">
        {{ box.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "AppCard",
  computed: {
    ...mapGetters([
      'selectedBoxes',
      'unselectedBoxes'
    ])
  },
  methods: {
    ...mapActions([
      'updateBox'
    ]),
    toggleSelection(box) {
      this.updateBox({ ...box, isSelected: !box.isSelected })
    }
  }
};
</script>

<style scoped></style>
