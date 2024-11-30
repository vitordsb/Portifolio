<template>
  <section class="main-projects-container">
    <h1 class="title">Meus Principais Projetos</h1>
    <div class="projects">
      <div v-for="project in mainProjects" :key="project.id" class="project-card">
        <img :src="project.image" :alt="project.name" class="project-image" />
        <h2 class="project-title">{{ project.name }}</h2>
        <p class="project-description">{{ project.description }}</p>
        <div class="links">
          <a :href="project.link" target="_blank" rel="noopener noreferrer" class="project-link">
            Ver Site
          </a>
          <a :href="project.link2" target="_blank" rel="noopener noreferrer" class="project-link">
            Ver repositório
          </a>
        </div>
      </div>
    </div>
    <button @click="navigateToAllProjects" class="view-more-button">
      Ver todos os meus projetos
    </button>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const mainProjects = [
  {
    id: 1,
    name: "Site empresa EGP INDÚSTRIA",
    description:
      "Projeto feito em Vuejs para empresa EGP INDÚSTRIA, com o intuito de divulgar seus serviços.",
    link: "https://egpindustria.vercel.app/",
    link2: "https://github.com/vitordsb/egpindustria",
    image: "/src/assets/projetos/egp.png",
  },
  {
    id: 2,
    name: "Qualiot FRB",
    description:
      "Framework de pesquisa feito em Vuejs e Nodejs para projeto utilizado na faculdade, sistema de Notas para IOT.",
    link2: "https://qualiotfront.vercel.app/",
    link: "https://github.com/RioBranco-Projects/qualiotfront",
    image: "/src/assets/projetos/qualiot.png",
  },
  {
    id: 3,
    name: "Coffee Flow",
    description: "Projeto feito para uma empresa de Café, utilizando Vuejs, Node e MySQL",
    link: "https://coffeeflow.vercel.app/",
    link2: "https://github.com/RioBranco-Projects/FazendaCafeFront",
    image: "/src/assets/projetos/coffeeflow.png",
  },
];

const navigateToAllProjects = () => {
  router.push("/todosProjetos");
};
</script>

<style scoped>
.main-projects-container {
  text-align: center;
  padding: 0;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.links {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.projects {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 30px;
  border-radius: 15px;
}

.project-card {
  background-color: var(--box-color);
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: justify;
  border-radius: 10px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.346);
  padding: 25px;
}

.project-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 10px;
}

.project-title {
  margin: 10px 0;
  font-size: 1.5rem;
}

.project-description {
  font-size: 1rem;
  margin-bottom: 15px;
}

.project-link {
  text-decoration: none;
  color: var(--text-color);
  font-weight: bold;
}

.view-more-button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
}

/* Responsividade para telas menores */
@media screen and (max-width: 1200px) {
  .projects {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 768px) {
  .projects {
    grid-template-columns: 1fr;
  }

  .project-card {
    width: 100%;
    padding: 10px;
  }

  .project-description {
    font-size: 0.9rem;
  }

  .view-more-button {
    font-size: 0.9rem;
    padding: 8px 16px;
  }
}

@media screen and (max-width: 480px) {
  .main-projects-container {
      height: 210dvh;
    padding: 10px;
  }

  .project-card {
    padding: 10px;
  }

  .project-title {
    font-size: 1.2rem;
  }

  .project-description {
    font-size: 0.8rem;
  }

  .view-more-button {
    font-size: 0.8rem;
    padding: 6px 12px;
  }
}
</style>
