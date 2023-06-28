<template>
    <v-btn
    :color="color"
    label
    outlined
    :height="display.xs ? '30' : display.sm ? '40' : '30'"
    :size="display.xs ? 'x-small' : display.sm ? 'small' : 'small'"
  >
  </v-btn>
</template>
  
<script setup lang="ts">
import { Services } from '@/scripts/services'
import { inject } from 'vue'
import { reactive } from 'vue'
import { useDisplay } from 'vuetify'

const display = inject(Services.Display, () => reactive(useDisplay())) as unknown as ReturnType<
  typeof useDisplay
>

interface Props {
  color: string
}

defineProps<Props>()

</script>

<style scoped>
.v-btn {
  font-size: 1.2rem;
}
</style>