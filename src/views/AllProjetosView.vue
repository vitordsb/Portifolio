<template>
  <section class="container">
    <h1 class="title">
      <button> <router-link to="/projetos"><--Voltar</router-link></button>
      Meus Projetos no GitHub
    </h1>

    <!-- Estado de Carregamento -->
    <div v-if="loading" class="spinner-container">
      <div class="spinner"></div>
    </div>

    <!-- Estado de Erro -->
    <div v-else-if="error" class="error-message">
      Erro: {{ error }}
    </div>

    <!-- Lista de Repositórios -->
    <ul v-else class="list">
      <li v-for="repo in repos" :key="repo.id" class="list-item">
        <h1>{{ repo.name }}</h1>
        <h2>
          Criado em: {{ formatDate(repo.created_at) }} por {{ repo.owner.login }}
        </h2>
        <p>{{ repo.description || 'Sem descrição disponível.' }}</p>
        <a :href="repo.html_url" target="_blank" rel="noopener noreferrer">
          Ver repositório
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Estados reativos
const repos = ref([]);
const loading = ref(true);
const error = ref(null);
const token = import.meta.env.VITE_GITHUB_TOKEN;
const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString();
};

const fetchData = async () => {
  try {
    const response = await fetch("https://api.github.com/users/vitordsb/repos", {
      headers: {
        Authorization: `token ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    repos.value = data;
  } catch (err) {
    if (err instanceof Error) {
      error.value = err.message;
    } else {
      error.value = "Um erro inesperado ocorreu.";
    }
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchData();
});
</script>

<style scoped>

.container {
  position: relative;
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 0;
  overflow: visible;
  display: flex;
  justify-content: center;
  height: 120vh;
  flex-direction: column;
  align-items: center;
}

/* Título */
.title {
  display: flex;
  gap: 40px;
  margin-right: 5%;
  font-size: 2rem;
  button {
    border: none;
    background: none;
    cursor: pointer;
    color: var(--btn-bg);
    font-size: 1.5rem;
    font-weight: bolder;
    a {
      text-decoration: none;
      color: var(--btn-bg);
    }
  }
}

.list {
  margin-top: 30px;
  list-style: none;
  padding: 0;
  gap: 10px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
}

@media (max-width: 760px) {
  .list {
    grid-template-columns: 1fr;
    align-items: center;
  }
}

/* Item da Lista */
.list-item {
  background-color: var(--box-color);
  color: var(--text-color);
  text-align: center;
  width: auto;
  height: auto;
  padding: 5px;
  border-radius: 8px;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.1s, box-shadow 0.1s;
}

.list-item:hover {
  transform: scale(1.025);
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.15);
}

/* Título do Repositório */
.list-item h1 {
  font-size: 1.5rem;
  font-weight: bolder;
  margin-bottom: 10px;
}

/* Subtítulo */
.list-item h2 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

/* Descrição */
.list-item p {
  font-size: 1rem;
  margin-bottom: 15px;
}

/* Link */
.list-item a {
  text-decoration: none;
  color: var(--btn-bg);
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
}

.list-item a:hover {
  color: blue;
}

/* Mensagem de Erro */
.error-message {
  color: red;
  font-size: 1.2rem;
  margin-top: 20px;
}

/* Spinner de Carregamento */
.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px; /* Ajuste conforme necessário */
}

.spinner {
  border: 8px solid #f3f3f3; /* Cinza claro */
  border-top: 8px solid #3498db; /* Azul */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
}

/* Animação do Spinner */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>