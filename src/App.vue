<template>
  <HeaderMenu />
  <router-view />
  <FooterMenu />
</template>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
@import "~bootstrap-icons/font/bootstrap-icons.css";
@import "./assets/scss/style.scss";
@import "./assets/scss/colors.scss";
</style>

<script setup>
import HeaderMenu from "@/components/HeaderMenu.vue";
import FooterMenu from "@/components/FooterMenu.vue";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { onBeforeMount } from "vue";
import { useStore } from "vuex";

const store = useStore();

onBeforeMount(async () => {
  store.commit('initialiseVars')
})
</script>
