<template>
  <section>
    <section class="hero">
      <div class="hero-h3">
        <h3>Conheça Alguns Edifícios Tombado no Brasil</h3>
        <h6>
          Existem 1121 bens tombados como patrimônio da humanidade, em 167
          países mundo afora. O Brasil possui 22 bens tombados (14 culturais, 6
          naturais e 1 misto), em 17 estados.
        </h6>
        <div class="pesquisa">
          <input type="text" v-model="url" @keyup.enter="() => { router.push('/tombamentos/' + transformaUrl(url)) }"
            placeholder="Pesquisar Por Estado" class="ipt" />
        </div>
      </div>
    </section>
  </section>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { transformaUrl } from '../utils'
const router = useRouter()
const url = ''
</script>

<style scoped>
.hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.8)),
    url("../assets/fotos/home-foto-2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: flex-end;
  text-align: center;
}

.hero-h3 {
  color: #ccc;
  height: 200px;
}

.hero-h3 h6 {
  margin: 0 auto;
  width: 50%;
  padding: 1rem;
}

@media (max-width: 600px) {
  .hero h6 {
    font-size: 1rem;
    width: 100%;
  }

  .hero h3 {
    font-size: 2rem;
  }
}

.pesquisa {
  display: flex;
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0);
  justify-content: center;
}

.ipt {
  width: 40%;
  padding: 2px 3px;
  border-radius: 7px;
  height: 40px;
  z-index: 1;
  background-color: rgba(102, 100, 100, 0.171);
  color: #ccc;
  border: 2px solid #ccc;
}

.ipt::placeholder {
  color: #ccc;
  font-weight: 500;
  text-align: center;
  font-size: larger;
}

.btn-pesquisa {
  padding: 3px 3px;
  width: 60px;
  margin-left: -10px;
  z-index: 0;
  border-radius: 0 5px 5px 0;

  background-color: rgba(255, 255, 255, 0.637);
  cursor: pointer;
}
</style>
