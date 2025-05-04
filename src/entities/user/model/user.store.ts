import { defineStore } from 'pinia'

export interface User {
  login: string
  email?: string
  phone?: string
}

export const useUserStore = defineStore('user', {
  state: (): { user: User | null } => {
    const userData = localStorage.getItem('user')

    if (userData) {
      return { user: JSON.parse(userData) }
    }

    return {
      user: { login: '' },
    }
  },
  actions: {
    setUser(user: User) {
      this.user = { login: user.login, email: user.email, phone: user.phone }

      localStorage.setItem('user', JSON.stringify(this.user))
    },
    clearUser() {
      this.user = null
      localStorage.removeItem('user')
    },
  },
})
