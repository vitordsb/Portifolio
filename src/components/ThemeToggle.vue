<template>
  <div class="theme-toggle">
    <button @click="toggleTheme">
      {{ isDarkMode ? '🌙 Dark' : '☀️ Light' }}
    </button>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "ThemeToggle",
  setup() {
    const isDarkMode = ref(false);

    const toggleTheme = () => {
      isDarkMode.value = !isDarkMode.value;
      document.documentElement.classList.toggle("dark", isDarkMode.value);
      localStorage.setItem("theme", isDarkMode.value ? "dark" : "light");
    };

    onMounted(() => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        isDarkMode.value = true;
        document.documentElement.classList.add("dark");
      }
    });

    return {
      isDarkMode,
      toggleTheme,
    };
  },
};
</script>

<style scoped>
.theme-toggle button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: var(--border-color);
  color: var(--btn-color);
  transition: all 0.3s ease;
}

.theme-toggle button:hover {
  background-color: var(--box-color);
}
</style>
