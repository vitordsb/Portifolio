<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import ThemeToggle from './ThemeToggle.vue';

// Controla o estado do menu
const isMenuOpen = ref(false);

// Alterna o menu aberto/fechado
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
    <section class="header">
        <div class="title">
            <h1>Dev Vitor de Souza</h1>
        </div>
        <!-- Botão Hamburger -->
        <div class="hamburger" @click="toggleMenu">
            <div :class="{ open: isMenuOpen }"></div>
            <div :class="{ open: isMenuOpen }"></div>
            <div :class="{ open: isMenuOpen }"></div>
        </div>
        <!-- Links de navegação -->
        <div :class="{ links: true, open: isMenuOpen }">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/projetos">Projetos</RouterLink>
            <RouterLink to="/habilidades">Habilidades</RouterLink>
            <RouterLink to="/certificados">Certificados</RouterLink>
        </div>
        <div class="theme">
            <ThemeToggle />
        </div>
    </section>
</template>

<style scoped>
/* Estilo do Header */
.header {
    height: auto;
    width: 100%;
    display: flex;
    z-index: 1;
    background-color: var(--bg-color);
    justify-content: space-around;
    align-items: center;
    padding: 0 2rem;
}
.title {
    padding: 10px;
    border-radius: 10px;
    h1 {
        color: var(--text-color);
        font-size: 35px;
        font-weight: bolder;
    }
}

/* Botão Hamburger */
.hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    z-index: 2;
}
.hamburger div {
    width: 25px;
    height: 3px;
    background-color: var(--text-color);
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
}

/* Animação do botão quando o menu está aberto */
.hamburger div.open:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}
.hamburger div.open:nth-child(2) {
    opacity: 0;
}
.hamburger div.open:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
}

/* Menu Links */
.links {
    display: flex;
    gap: 2rem;
    list-style: none;
    transition: all 0.3s ease-in-out;
}
.links a {
    color: var(--text-color);
    font-size: 20px;
    font-weight: bolder;
    text-decoration: none;
    transition: color 0.3s;
}
.links.open {
    flex-direction: column;
    position: absolute;
    top: 90px; /* Ajuste para ficar abaixo do header */
    right: 0;
    background-color: var(--bg-color);
    width: 100%;
    padding: 1rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 1;
}
.links.open a {
    margin-bottom: 1rem;
    text-align: center;
}

/* Ocultar o menu padrão em dispositivos móveis */
@media screen and (max-width: 700px) {
    .header {
        position: relative;
        gap: 10px
    }
    .hamburger {
        display: flex;
    }
    .title {
        h1 {
            font-size: 25px;
        }
    }
    .links {
        display: none;
    }
    .links.open {
        display: flex;
    }
}

/* Estilo Padrão (fora do mobile) */
@media screen and (min-width: 701px) {
    .hamburger {
        display: none;
    }
    .links {
        display: flex;
        position: static;
        flex-direction: row;
        background: none;
        box-shadow: none;
    }
}
</style>
