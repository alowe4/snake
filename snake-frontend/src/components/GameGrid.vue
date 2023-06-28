<template>
    <v-row v-for="item in items" class="justify-center" dense>
        <v-col v-for="item in items" dense cols="auto">
            <GridPiece :color="item.color"/>
        </v-col>
    </v-row>
</template>
  
<script setup lang="ts">

import { onMounted, reactive } from 'vue';
import GridPiece from './GridPiece.vue';


class TempSquare {
  constructor(public color: string) {}
}

const items = reactive(new Array<TempSquare>())


onMounted(() => {
  for (let i = 0; i < 9; i++) {
    items.push(new TempSquare("green"))
  }
})
</script>
  