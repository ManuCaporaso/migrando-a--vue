import { defineStore } from 'pinia'

interface User {
  user: string
  password: string
  remember: boolean
}

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {} as User
  }),
  actions: {
    setUser(user: User) {
      this.user = user
    }
  }
})
