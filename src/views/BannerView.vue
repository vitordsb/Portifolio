<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Variáveis e lógica para animação
const loopNum = ref(0);
const isDeleting = ref(false);
const text = ref("");
const delta = ref(150);
const toRotate = ["Web Developer", "UI/UX Designer", "Mobile Developer", "Full-Stack Dev"];
const period = 2000;

let ticker = null;

const handleTyping = () => {
    const i = loopNum.value % toRotate.length;
    const fullText = toRotate[i];
    text.value = isDeleting.value
        ? fullText.substring(0, text.value.length - 1)
        : fullText.substring(0, text.value.length + 1);

    if (isDeleting.value) {
        delta.value = 100; // Velocidade ao apagar
    }

    if (!isDeleting.value && text.value === fullText) {
        isDeleting.value = true;
        delta.value = period; // Pausa ao finalizar
    } else if (isDeleting.value && text.value === "") {
        isDeleting.value = false;
        loopNum.value++;
        delta.value = 150; // Pausa ao reiniciar
    }
};

onMounted(() => {
    ticker = setInterval(handleTyping, delta.value);
});

onUnmounted(() => {
    if (ticker) clearInterval(ticker);
});
</script>

<template>
    <section class="banner">
        <div class="background">
            <div class="leftside">
                <div class="box">
                    <h1>Olá Mundo!</h1>
                    <h2>
                    {{ text }}...
                    </h2>
                    <p>Olá, sou o Vitor, desenvolvedor Front-end Junior e UI/UX Designer. Experiencias sólidas com <span>HTML, CSS,
                            JavaScript, Vue.js, React e Figma.</span> Estudando para me tornar um desenvolvedor
                        Full-Stack.</p>
                    <div class="buttons">
                        <button>Sobre mim --></button>
                        <button>Ver Curriculo --></button>
                        <button>Meus Projetos --></button>
                    </div>
                    <div class="links">
                        <a class="github" href="https://github.com/vitordsb" target="_blank"> <img
                                src="/src/assets/svg/rds/github.svg" alt=""></a>
                        <a class="linkedin" href="https://www.linkedin.com/in/vitor-de-souza-15067a1bb/"
                            target="_blank"><img src="/src/assets/svg/rds/linkedin.svg" alt=""></a>
                        <a class="whatsapp" href="https://wa.me/11957519999" target="_blank"><img
                                src="/src/assets/svg/rds/whatsapp.svg" alt=""></a>
                    </div>
                </div>
            </div>
            <div class="rightside">
                <img src="/src/assets/iconsemfundo.png" alt="">
            </div>
        </div>
    </section>
</template>
<style scoped>
.banner {
    background-color: var(--bg-color);
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 800px;
    width: auto;
}
.background {
    align-items: center;
    padding: 50px; /* Valor ideal para 1600px */
    border-radius: 25px;
    gap: 10px;
    width: auto;
    background-color: var(--box-color);
    display: flex;
}
.rightside {
    img {
        width: 500px;
        border-radius: 50%;
    }
}
.leftside {
    width: 700px; /* Ideal para 1600px */
    h1 {
        color: var(--text-color);
        font-weight: bolder;
        font-size: 4rem; /* Tamanho apropriado para títulos */
    }
    .box {
        h2 {
            font-size: 3.5rem; /* Tamanho reduzido para subtítulos */
            margin-bottom: 1rem;
            color: var(--btn-bg);
        }
        p {
            font-size: 1.4rem; /* Texto menor para 1600px */
            width: 650px; /* Ajuste de largura */
            text-align: justify;
            font-weight: bolder;
        }
        span {
            font-weight: bolder;
            color: var(--span-color);
        }
        .buttons {
            display: flex;
            gap: 1rem;
            margin-top: 2rem;
            button {
                background-color: #ffffff;
                color: #000000;
                font-size: 18px; /* Botões levemente menores */
                padding: 10px 20px;
                border-radius: 10px;
                border: none;
                cursor: pointer;
                font-weight: bolder;
                transition: all 0.3s;
            }
            button:hover {
                background-color: #0087e8;
                color: #ffffff;
            }
        }
    }
    .links {
        margin-top: 2rem;
        display: flex;
        gap: 1rem;
        a {
            img {
                width: 40px; /* Ícones ajustados */
                height: 40px;
            }
            transition: calc(.3s);
        }
        .linkedin:hover {
            transform: scale(1.075);
        }
        .github:hover {
            transform: scale(1.075);
        }
        .whatsapp:hover {
            transform: scale(1.075);
        }
    }
}

@media screen and (min-width: 1920px) {
    .leftside {
        width: 800px;
        h1 {
            font-size: 4.5rem;
        }
        .box {
            h2 {
                font-size: 4rem;
            }
            p {
                font-size: 1.5rem;
            }
        }
    }
    .rightside img {
        width: 600px;
        height: 600px;
    }
}
@media screen and (max-width: 700px) {
    .banner {
        flex-direction: column-reverse;
        height: auto;
        padding: 30px;
    }
    .background {
        flex-direction: column-reverse;
        padding: 20px;
    }
    .leftside {
        width: 100%;
        text-align: center;
        h1 {
            font-size: 2.5rem;
        }
        .box {
            h2 {
                font-size: 2rem;
            }
            p {
                font-size: 1rem;
                width: 100%;
            }
            .buttons button {
                font-size: 16px;
                width: 100%;
            }
        }
    }
    .rightside img {
        width: 100%;
        height: auto;
    }
}

</style>