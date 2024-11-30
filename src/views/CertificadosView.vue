<template>
  <section class="cursos-section">
    <div class="cursos-box">
      <h2 class="cursos-title">Certificados</h2>
      <p class="cursos-text">
        Certificados de cursos feitos em plataformas de estudo e treinamento.
      </p>
      
      <!-- Botão de seta anterior -->
      <button class="arrow prev-arrow" @click="prevSlide">
        &#8592;
      </button>
      
      <!-- Carousel -->
      <Carousel
        ref="carouselRef"
        :items-to-show="3"
        :loop="true"
        :autoplay="false"
        :breakpoints="breakpoints"
        class="custom-carousel"
      >
        <Slide v-for="(curso, index) in cursos" :key="index">
          <div class="carousel-item">
            <h5>{{ curso.title }}</h5>
            <img :src="curso.image" :alt="curso.title" class="curso-image" />
            <button
              class="curso-button"
              @click="openCertificate(curso.link)"
            >
              Ver certificado
            </button>
          </div>
        </Slide>
      </Carousel>
      
      <!-- Botão de seta próximo -->
      <button class="arrow next-arrow" @click="nextSlide">
        &#8594;
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

// Referência para o Carousel
const carouselRef = ref(null);

const cursos = [
  {
    title: "Especialista Front-End",
    image: "/src/assets/imgcourses/Frontend.jpg",
    link: "https://www.treinaweb.com.br/certificado/NMLWNURYAUJ1",
  },
  {
    title: "Web Services, API's e SOAP",
    image: "/src/assets/imgcourses/API.jpeg",
    link: "https://www.linkedin.com/learning/certificates/c4c34b153930d341f1aeba83dd4e591221e2f8493d023f3dd410c256cb510815?trk=share_certificate",
  },
  {
    title: "UI/UX Design",
    image: "/src/assets/imgcourses/uiux.jpg",
    link: "https://www.treinaweb.com.br/certificado/MVXVV3N287LA",
  },
  {
    title: "Programador Python",
    image: "/src/assets/imgcourses/python.jpg",
    link: "https://www.udemy.com/certificate/UC-1b1b6a02-225d-4cca-a480-618899f94773/",
  },
  {
    title: "Curso de Git e Github",
    image: "/src/assets/imgcourses/GIT.jpeg",
    link: "https://www.linkedin.com/learning/certificates/5d10641555247b1326529f31edc5a4d87e9533dcb6ceb080d3fd520043de1802?trk=share_certificate",
  },
  {
    title: "Desenvolvedor React",
    image: "/src/assets/imgcourses/react.png",
    link: "https://www.treinaweb.com.br/certificado/RGCLBHSCWKXF",
  },
  {
    title: "Curso de QA Software",
    image: "/src/assets/imgcourses/QA.jpeg",
    link: "https://www.linkedin.com/learning/certificates/a0bc64a07fc39146b57beacb4bcadf3be3cbcf499c585f0473bc897c451efe73?trk=share_certificate",
  },
  {
    title: "SO Linux",
    image: "/src/assets/imgcourses/linux.jpg",
    link: "https://www.treinaweb.com.br/certificado/PH7ULH2ZUDGN",
  },
  {
    title: "Desenvolvedor JavaScript",
    image: "/src/assets/imgcourses/javascript.jpg",
    link: "https://www.treinaweb.com.br/certificado/MX4DQNNQBEFL",
  },
  {
    title: "Desenvolvedor React e Next.js",
    image: "/src/assets/imgcourses/react.png",
    link: "https://www.treinaweb.com.br/certificado/CZFNEUZT2LMC",
  },
];

const breakpoints = {
  1024: { itemsToShow: 3 }, // 3 itens para telas acima de 1024px
  700: { itemsToShow: 1 }, // Apenas 1 item em telas menores que 700px
};

const openCertificate = (link) => {
  window.open(link, "_blank");
};

// Função para avançar para o próximo slide
const nextSlide = () => {
  if (carouselRef.value) {
    carouselRef.value.next();
  }
};

// Função para voltar para o slide anterior
const prevSlide = () => {
  if (carouselRef.value) {
    carouselRef.value.prev();
  }
};
</script>

<style scoped>
.cursos-section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: auto;
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 50px 0;
}

.cursos-box {
  position: relative;
  text-align: center;
  margin: auto;
  max-width: 1620px;
  width: 90%;
}

.cursos-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.cursos-text {
  font-size: 1.4rem;
  margin-bottom: 50px;
}

.carousel-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.carousel-item h5 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.curso-image {
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.446);
  height: 300px;
  width: 100%;
  object-fit: cover;
  margin-bottom: 15px;
  transition: transform 0.3s;
}

.curso-image:hover {
  transform: scale(1.05);
}

.curso-button {
  background-color: var(--box-color);
  color: var(--text-color);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: calc(.3s);
}

.curso-button:hover {
  transform: scale(1.05);
  color: white;
  background-color: #366bb5;
}

/* Estilizando as setas */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 4rem;
  color: var(--text-color);
  transition: transform 0.3s, color 0.3s;
  padding: 10px;
}

.arrow:hover {
  transform: translateY(-50%) scale(1.2);
  color: #366bb5;
}

.prev-arrow {
  left: -50px;
}

.next-arrow {
  right: -50px;
}

@media (max-width: 700px) {
  .cursos-text {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }

  .arrow {
    font-size: 2rem;
  }

  .prev-arrow {
    left: -20px;
  }

  .next-arrow {
    right: -20px;
  }
}
</style>
