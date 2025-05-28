<template>
  <nav class="game-nav">
    <div class="container d-flex align-items-center p-3 gap-2">
      <router-link to="/"  class="me-auto">
        <img src="@/assets/imgs/cdm_logo.svg" alt="" />
      </router-link>
      <button class="btn btn-secondary rounded-pill">Cadastrar</button>
      <button class="btn border-secondary text-secondary rounded-pill">
        Entrar
      </button>
    </div>
  </nav>
  <nav class="navbar navbar-expand-lg bg-body-tertiary bg-primary text-white">
    <div class="container">
      <span>Navegue por:</span>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#"> Meu Perfil </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Vídeos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Notícias</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Jogos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sala de Conversa</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script default></script>
