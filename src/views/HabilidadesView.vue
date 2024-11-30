<template>
    <section class="habilidades">
        <div class="title">
            <h1>Minhas habilidades</h1>
            <p>
                Tecnologias que tenho conhecimentos e habilidades, para desenvolvimento de projetos.
                Alguns deles estão em fase de aprendizado.
            </p>
        </div>
        <div class="boxItens">
            <div class="column">
                <div class="linguagem" v-for="skill in skills" :key="skill.name">
                    <img :src="skill.icon" :alt="skill.name" />
                    <p>{{ skill.name }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const skills = [
    { name: "HTML", icon: "/src/assets/svg/html.svg" },
    { name: "CSS", icon: "/src/assets/svg/css.svg" },
    { name: "JavaScript", icon: "/src/assets/svg/javascript.svg" },
    { name: "TypeScript", icon: "/src/assets/svg/typescript.svg" },
    { name: "PHP", icon: "/src/assets/svg/php.svg" },
    { name: "React", icon: "/src/assets/svg/react.svg" },
    { name: "Vue", icon: "/src/assets/svg/vue.svg" },
    { name: "Vite", icon: "/src/assets/svg/vite.svg" },
    { name: "Next", icon: "/src/assets/svg/nextjs.svg" },
    { name: "Angular", icon: "/src/assets/svg/angular.svg" },
    { name: "Node", icon: "/src/assets/svg/node.svg" },
    { name: "MySql", icon: "/src/assets/svg/mysql.svg" },
    { name: "Linux", icon: "/src/assets/svg/linux.svg" },
    { name: "Figma", icon: "/src/assets/svg/figma.svg" },
    { name: "Git", icon: "/src/assets/svg/git.svg" },
];
</script>

<style scoped>
.habilidades {
    height: auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.title {
    gap: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 50px;
    h1 {
        font-size: 3rem;
        font-weight: bolder;
    }
    p {
        font-size: 1.5rem;
        text-align: center;
    }
}

.boxItens {
    width: 100%;
    display: flex;
    justify-content: center;
}

.column {
    display: grid;
    grid-template-columns: repeat(5, 2fr);
    gap: 20px;
    justify-content: center;
    align-items: center;
}

.linguagem {
    gap: 10px;
    background-color: var(--border-color);
    padding: 10px;
    width: 250px;
    height: auto;
    border-radius: 20px;
    transition: transform 0.3s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    img {
        width: 130px;
    }
    p {
        font-size: 1.5rem;
        font-weight: bolder;
        color: var(--text-color);
    }
}

.linguagem:hover {
    transform: scale(1.075);
}

/* Responsividade para telas médias (tablets, 768px) */
@media screen and (max-width: 768px) {
    .column {
        grid-template-columns: repeat(3, 1fr);
        gap: 15px;
    }

    .linguagem {
        width: 150px;
        height: 200px;
    }

    .linguagem img {
        width: 90px;
    }

    .linguagem p {
        font-size: 1rem;
    }

    .title h1 {
        font-size: 2rem;
    }

    .title p {
        font-size: 1.2rem;
    }
}

/* Responsividade para telas pequenas (celulares, 480px) */
@media screen and (max-width: 480px) {
    .column {
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
    }

    .linguagem {
        width: 110px;
        height: 110px;
        padding: 10px;
    }

    .linguagem img {
        width: 60px;
    }

    .linguagem p {
        font-size: 0.8rem;
    }

    .title h1 {
        font-size: 1.5rem;
    }

    .title p {
        font-size: 0.9rem;
    }
}
</style>
