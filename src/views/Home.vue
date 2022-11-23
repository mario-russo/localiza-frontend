<template>
  <section>
    <section class="hero">
      <div class="hero-h3">
        <h3>Conheça alguns edificios Tombando no Brasil</h3>
        <h6>
          Existem 1121 bens tombados como patrimônio da humanidade, em 167
          países mundo afora. O Brasil possui 22 bens tombados (14 culturais, 6
          naturais e 1 misto), em 17 estados.
        </h6>
        <button class="button-48" role="button">
          <span class="text">Conheça Mais</span>
        </button>
      </div>
    </section>
  </section>
</template>
<script setup lang="ts"></script>
<style scoped>
.hero {
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.8)
    ),
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

/* 
===========================================
           CSS do botão Saiba mais 
===========================================
*/
.button-48 {
  appearance: none;
  background-color: rgba(204, 204, 204, 0.657);
  border-width: 0;
  box-sizing: border-box;
  color: #000000ab;
  cursor: pointer;
  display: inline-block;
  font-family: Clarkson, Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1em;
  margin: 15px;
  opacity: 1;
  outline: 0;
  padding: 1em 5.2em;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-rendering: geometricprecision;
  text-transform: uppercase;
  transition: opacity 300ms cubic-bezier(0.694, 0, 0.335, 1),
    background-color 100ms cubic-bezier(0.694, 0, 0.335, 1),
    color 100ms cubic-bezier(0.694, 0, 0.335, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;
  border-radius: 5px;
}

.button-48:before {
  animation: opacityFallbackOut 0.5s step-end forwards;
  backface-visibility: hidden;
  background-color: #ebebeb74;
  clip-path: polygon(-1% 0, 0 0, -25% 100%, -1% 100%);
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transform: translateZ(0);
  transition: clip-path 0.5s cubic-bezier(0.165, 0.84, 0.44, 1),
    -webkit-clip-path 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  width: 100%;
}

.button-48:hover:before {
  animation: opacityFallbackIn 0s step-start forwards;
  clip-path: polygon(0 0, 101% 0, 101% 101%, 0 101%);
}

.button-48:after {
  background-color: #ffffff;
}

.button-48 span {
  z-index: 1;
  position: relative;
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
</style>
