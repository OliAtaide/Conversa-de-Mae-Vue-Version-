<template>
  <div class="card h-100 game-card">
    <div class="card-body">
      <img src="@/assets/imgs/quiz.svg" class="w-50 mx-auto" alt="" />
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
});

import { computed } from "vue";
const title = computed(() => props.game.title);
const id = computed(() => props.game.id);
</script>
