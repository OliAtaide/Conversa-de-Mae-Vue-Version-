<template>
  <div class="game container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#"> Início </a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Jogos</li>
      </ol>
    </nav>
    <h3 class="container-title fw-bold">Jogos e Atividades</h3>
    <div class="game-containerm-4 d-flex">
      <div class="row w-100 row-gap-4">
        <div
          class="col-12 col-md-6 col-lg-3"
          v-for="(game, index) in $store.state.games"
          :key="index"
        >
          <GameCard :game="game" :index="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import GameCard from "@/components/GameCard.vue";
</script>
