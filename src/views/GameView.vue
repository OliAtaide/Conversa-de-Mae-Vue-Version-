<template>
  <div class="game container">
    <div class="game-body mb-3">
      <div class="card game-card">
        <div class="card-body">
          <h3 class="game-title text-secondary fw-bold">
            {{ title }}
          </h3>
        </div>
      </div>
    </div>
    <div class="game-body">
      <div
        class="card game-card"
        :key="currentQuestionIndex"
        :id="`questao_${currentQuestionIndex}`"
        v-if="!finished"
      >
        <div class="card-body px-4">
          <div class="progress rounded-pill">
            <div
              class="progress-bar rounded-pill text-end px-2 py-1"
              role="progressbar"
              :aria-valuenow="currentProgress"
              aria-valuemin="0"
              aria-valuemax="100"
              :style="`width: ${
                currentProgress == 0 ? 'fit-content' : currentProgress
              }%`"
            >
              {{ currentProgress }}%
            </div>
          </div>
          <h6 class="card-title p-4 bg-primary-light fw-semibold">
            {{ currentQuestion.title }}
          </h6>
          <img
            class="mx-5"
            v-if="currentQuestion.image"
            :src="require(`@/assets/imgs/${currentQuestion.image}`)"
          />
          <div class="card-text">
            <div
              class="form-check px-4 py-3 form"
              :class="
                disabled && i == currentOption
                  ? textRight
                    ? 'form-check-right'
                    : 'form-check-wrong'
                  : ''
              "
              v-for="(item, i) in currentQuestion.options"
              :key="i"
            >
              <div class="d-flex gap-3 align-items-center">
                <input
                  class="form-check-input m-0"
                  type="radio"
                  :value="i"
                  :name="`questao_${index}`"
                  v-model="currentOption"
                  :disabled="disabled"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  {{ item }}
                </label>
              </div>
              <div
                class="feedback d-flex flex-column"
                v-if="disabled && i === currentOption"
              >
                <h6 class="text-right mt-2" v-if="textRight">Correto!</h6>
                <h6 class="text-wrong mt-2" v-if="textWrong">Errado!</h6>
                <span v-if="currentQuestion.feedbacks">
                  {{ currentQuestion.feedbacks[currentOption] }}
                </span>
                <button
                  type="button"
                  class="btn ms-auto btn-primary"
                  data-next=""
                  @click="next"
                  v-if="disabled"
                >
                  Continuar
                </button>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-end px-4">
            <button
              type="submit"
              class="btn btn-send w-auto"
              data-send=""
              @click="send"
              v-if="!disabled"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
      <div class="card game-card" id="gameover" v-if="finished">
        <div class="card-body p-4">
          <h3 class="card-title text-center">VOCÊ COMPLETOU!</h3>
          <div class="d-flex align-items-center justify-content-center gap-5">
            <h3>
              Acertou: <span class="text-right"> {{ hit }} </span>
            </h3>
            <h3>
              Errou: <span class="text-wrong"> {{ miss }} </span>
            </h3>
          </div>
          <div class="d-flex justify-content-end align-items-center">
            <a href="" class="btn btn-redo w-auto"> Refazer </a>
            <a
              v-if="store.state.games[go - 1]"
              :href="go"
              class="btn btn-next d-flex align-items-center w-auto"
            >
              Próximo
              <i class="bi bi-arrow-right-short"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();

const game = store.getters.getGameById(route.params.id);

const go = parseInt(route.params.id) + 1;

const { title, list } = game;

const hit = ref(0);
const miss = ref(0);
const currentQuestionIndex = ref(0);
const currentQuestion = computed(() => list[currentQuestionIndex.value]);
const currentProgress = computed(() => {
  return Math.round((currentQuestionIndex.value / list.length) * 100);
});
const currentOption = ref(null);

const textRight = ref(false);
const textWrong = ref(false);
const disabled = ref(false);
const finished = ref(false);

function send() {
  if (currentOption.value === null) {
    alert("Por favor, selecione uma opção.");
    return;
  }

  disabled.value = true;

  if (currentOption.value === currentQuestion.value.answer) {
    textRight.value = true;
    textWrong.value = false;
    hit.value++;
  } else {
    textWrong.value = true;
    textRight.value = false;
    miss.value++;
  }
}

function next() {
  if (currentQuestionIndex.value < list.length - 1) {
    currentQuestionIndex.value++;
    currentOption.value = null;
    textRight.value = false;
    textWrong.value = false;
    disabled.value = false;
  } else {
    finished.value = true;
  }
}
</script>
