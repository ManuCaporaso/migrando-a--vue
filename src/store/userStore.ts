import { defineStore } from 'pinia'
import type { User } from '@/models/UserModel'

export const useUserStore = defineStore('user-store', {
  state: (): { user: User } => ({
    user: {
      id: 0, // Inicialización por defecto para `id`
      firstname: '',
      lastname: '',
      username: '',
      login: '',
      password: '',
      rememberMe: false,
      isAdmin: false, // Valor inicial para `isAdmin`
      jwtToken: '',
      refreshTokens: [] // Arreglo vacío para `refreshTokens`
    }
  }),
  actions: {
    setUser(user: User) {
      this.user = user;
    }
  }
})
