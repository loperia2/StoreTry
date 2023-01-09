import { defineStore } from "pinia";

export const useAuthStore = defineStore('authStore', {
  state: () => {
    return {
      isAuthcanticated: false
    }
  }
})