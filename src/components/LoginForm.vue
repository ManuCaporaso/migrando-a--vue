<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/userStore'

const user = ref('')
const password = ref('')
const remember = ref(false)

const router = useRouter()
const userStore = useUserStore()

function handleSubmit() {
  userStore.setUser({ user: user.value, password: password.value, remember: remember.value })
  router.push('/home')
}
</script>

<template>
  <div class="wrapper">
    <form @submit.prevent="handleSubmit">
      <h1>Login</h1>
      <div class="input-bx">
        <input v-model="user" name="user" type="text" placeholder="Usuario" required />
        <ion-icon class="icon" name="person-circle-outline"></ion-icon>
      </div>
      <div class="input-bx">
        <input
          v-model="password"
          name="password"
          type="password"
          placeholder="Contraseña"
          required
        />
        <ion-icon class="icon" name="lock-closed-outline"></ion-icon>
      </div>
      <div class="remember-forgot">
        <label><input v-model="remember" type="checkbox" /> Recordarme</label>
        <a href="#">Olvidaste tu contraseña</a>
      </div>
      <button type="submit" class="btn">Ingresar</button>
    </form>
  </div>
</template>

<style scoped>
.wrapper {
  width: 400px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  color: #fff;
  padding: 30px 40px;
  border-radius: 15px;
}

.wrapper h1 {
  font-size: 3em;
  text-align: center;
}

.wrapper .input-bx {
  position: relative;
  width: 100%;
  margin: 30px 0;
}

.wrapper .input-bx input {
  width: 100%;
  padding: 20px;
  border-radius: 15px;
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.wrapper .remember-forgot {
  display: flex;
  justify-content: space-between;
  margin: -15px 0 15px;
}

.wrapper .btn {
  width: 100%;
  height: 50px;
  border-radius: 15px;
  font-size: 1.2em;
  font-weight: 600;
  background-color: white;
  color: #333;
}

a {
  color: #fff;
}

.icon {
  font-size: 1.5rem;
  position: absolute;
  top: 50%;
  right: 15px; 
  transform: translateY(-50%);
  font-size: 24px;
  color: #ffffff;
}
</style>
