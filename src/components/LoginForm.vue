<script setup lang="ts">
import type { User } from '@/models/UserModel';

// importaciones locales
import { useUserStore } from '@/store/userStore';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/authStore';

//importaciones de librerias
import {Form,Field} from 'vee-validate'
import * as Yup from 'yup'


const uStore = useUserStore()
console.log(uStore)
const router = useRouter()
const auth = useAuthStore()

const schema = Yup.object().shape({
    username: Yup.string().required('Usuario Requerido'),
    password: Yup.string().required('Password requerida')

})




function handleSubmit() {
   // uStore.setUser(user)
    auth.login(username, password).then( ()=> {
      router.push('/Home')
    }) 
}


</script>

<template>
        <Form @submit="handleSubmit" :validation-schema="schema" v-slot="{errors, isSubmitting}">
            <h1>Login</h1>
            <div class="input-bx">
                <Field name="username" type="text" :class="{'is-invalid':errors.username || errors.apiError }" placeholder="Usuario" required />
                <ion-icon class="icon" name="person-circle"></ion-icon>
                <div class="invalid-feedback">{{ errors.username }}</div>
            </div>
            <div class="input-bx">
                <Field name="password" type="password" :class="{'is-invalid':errors.password || errors.apiError }" placeholder="Contraseña" required />
                <ion-icon class="icon" name="lock-closed"></ion-icon>
                <div class="invalid-feedback">{{ errors.password }}</div>
            </div>
            <div class="remember-forgot">
                <label><input type="checkbox" name="remember"> Recordarme</label>
                <a href="#">Olvidaste tu contraseña</a>
            </div>
            <button type="submit" class="btn">
              <span v-show="isSubmitting" class="loader"></span>
              <p v-show="!isSubmitting">Ingresar</p>
            </button>
        </Form>
</template>

<style scoped>
/* estilos del componente */

.input-bx {
  position: relative;
  width: 100%;
  height: 50px;
  margin: 30px 0;
}

.input-bx input {
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  color: #fff;
  padding: 20px 45px 20px 20px;
}

.input-bx input.is-invalid{
  width: 100%;
  height: 100;
  background-color: rgba(250, 150, 150, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: red
}


.input-bx input::placeholder {
  color: #fff;
}

.input-bx input.is-invalid::placeholder {
  color: #ff0000;
}

.input-bx .icon {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.5em;
}

.input-bx .invalid-feedback{
    padding: 0px 16px;
    margin: 0;
    color: #ff0000;
    font-weight: 300;
}

.remember-forgot {
  display: flex;
  justify-content: space-between;
  font-size: 1.2em;
  margin: -15px 0 15px;
}

.remember-forgot label input {
  accent-color: #fff;
  margin-right: 3px;
}

.remember-forgot a {
  color: #fff;
  text-decoration: none;
}

.remember-forgot a:hover {
  text-decoration: underline;
}

button {
  width: 100%;
  height: 50px;
  border-radius: 15px;
  border: none;
  outline: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-size: 1.2em;
  font-weight: 600;
  color: #333;
}

button p{
  font-size:  1.2em;
  font-weight: 600;
  color: #333;
}

.louder{
  margin:  auto 0;
  width: 24px;
  height: 24px;
  border: 4px solid purple;
  border-bottom-color: transparent ;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}


</style>
