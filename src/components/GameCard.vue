<template>
  <div class="card h-100 game-card">
    <div class="card-body">
      <img :src="require(`@/assets/imgs/quiz${type}.png`)" class="w-50 mx-auto" alt="" />
      <span v-if="$store.state.concluidos[index]" class="badge badge-success rounded-pill">
        Concluído
      </span>
      <span v-else class="badge badge-gray rounded-pill">
        Não Iniciou
      </span>
      <h6 class="card-title fw-bold">
        {{ title }}
      </h6>
      <a class="btn btn-secondary rounded-pill mt-auto" :href="id">Jogar</a>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  game: {
    type: Object,
    required: true,
  },
  index:{
    type: Number,
    required: true,
  }
});

import { computed } from "vue";
const title = computed(() => props.game.title);
const id = computed(() => props.game.id);
const type = computed(() => props.game.type);
</script>
