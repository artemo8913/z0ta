<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

import { FormInput, FormPasswordInput, FormPhoneInput } from '@/shared/ui/form'
import { useUserStore } from '@/entities/user'

interface LoginForm {
  login: string
  email: string
  phone: string
  password: string
  repeatPassword: string
}

const formState = ref<LoginForm>({
  login: '',
  email: '',
  phone: '',
  password: '',
  repeatPassword: '',
})

const touched = ref<{ [key in keyof LoginForm]: boolean }>({
  login: false,
  email: false,
  phone: false,
  password: false,
  repeatPassword: false,
})

const userStore = useUserStore()

const router = useRouter()

const errors = computed(() => ({
  login:
    touched.value.login && formState.value.login.length < 6
      ? 'Логин должен быть не менее 6 символов'
      : '',

  phone:
    touched.value.phone &&
    formState.value.phone &&
    !/\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(formState.value.phone)
      ? 'Введите номер телефона в формате +7 (XXX) XXX-XX-XX'
      : '',

  email:
    touched.value.email && formState.value.email && !/.+@.+\..+/.test(formState.value.email)
      ? 'Некорректный email'
      : '',

  repeatPassword:
    touched.value.repeatPassword && formState.value.password !== formState.value.repeatPassword
      ? 'Пароли не совпадают'
      : '',
}))

const isFormValid = computed(() => !Object.values(errors.value).some(Boolean))

const handleSubmit = (e: Event) => {
  e.preventDefault()

  Object.keys(touched.value).forEach((key) => {
    touched.value[key as keyof LoginForm] = true
  })

  if (isFormValid.value) {
    userStore.setUser(formState.value)
    router.push('/')
  }
}
</script>

<template>
  <main class="page">
    <form @submit="handleSubmit">
      <h1>Регистрация</h1>
      <FormInput
        v-model="formState.login"
        label="Логин"
        name="login"
        is-required
        :errorText="errors.login"
        :is-touched="touched.login"
        @blur="touched.login = true"
      />

      <FormInput
        v-model="formState.email"
        label="Email"
        name="email"
        :errorText="errors.email"
        :is-touched="touched.email"
        @blur="touched.email = true"
      />

      <FormPhoneInput
        v-model="formState.phone"
        label="Телефон"
        name="phone"
        :errorText="errors.phone"
        :is-touched="touched.phone"
        @blur="touched.phone = true"
      />

      <FormPasswordInput
        v-model="formState.password"
        label="Пароль"
        name="password"
        is-required
        :is-touched="touched.password"
        @blur="touched.password = true"
      />

      <FormPasswordInput
        v-model="formState.repeatPassword"
        label="Повторите пароль"
        name="repeatPassword"
        is-required
        :errorText="errors.repeatPassword"
        :is-touched="touched.repeatPassword"
        @blur="touched.repeatPassword = true"
      />

      <button type="submit">Зарегистрироваться</button>
    </form>
    <p class="agreement">
      Нажимая кнопку «Зарегистрироваться», пользователь соглашается с политикой в отношении
      обработки персональных данных и публичной офертой
    </p>
  </main>
</template>

<style scoped>
main {
  max-width: 530px;
}

form {
  gap: 20px;
  display: flex;
  flex-direction: column;
}

h1 {
  font-size: 40px;
  font-weight: 500;
  line-height: 130%;
  margin-bottom: 24px;
  color: var(--color-black);
}

button {
  border: none;
  height: 50px;
  cursor: pointer;
  margin-top: 12px;
  border-radius: 2px;
  transition: background-color 0.1s linear;
  color: var(--color-text-light);
  background-color: var(--color-gray-dark);
}

button:hover {
  background-color: var(--color-gray);
}

.agreement {
  font-size: 14px;
  margin-top: 24px;
  font-weight: 400;
  color: #878787;
  padding-top: 24px;
  line-height: 129%;
  font-family: var(--secondary-family);
  border-top: 1px solid var(--color-gray-light);
}

@media only screen and (max-width: 481px) {
  h1 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 8px;
  }

  .agreement {
    margin-top: 16px;
    padding-top: 16px;
  }
}
</style>
