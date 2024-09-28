<template>
  <div>
    <h1>Bienvenido, {{ userStore.user.user }}</h1>
    <p>Contraseña: {{ userStore.user.password }}</p>
    <p>Recordarme: {{ userStore.user.remember ? 'Sí' : 'No' }}</p>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '../store/userStore'

const userStore = useUserStore()
</script>

<style scoped>
h1 {
  font-size: 2.5em;
  color: #ffffff;
}

p {
  font-size: 1.2em;
  color: #ffffff;
}
</style>
