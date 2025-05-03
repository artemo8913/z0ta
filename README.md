# ТЕСТОВОЕ ЗАДАНИЕ ZotaTech

Верстка страниц по макету

Задача: Сверстать страницы по предоставленному макету, без использования сторонних UI-библиотек.

Стек: Vue 3, Pinia 2, Typescript

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Требования: Страницы должны корректно отображаться в следующих браузерах:

Десктоп: последние версии Safari, Chrome, Mozilla.
Мобильные устройства: Safari, Chrome.

## Страницы для реализации:

### Страница регистрации:

Форма регистрации с полями:
Логин (обязательное поле)
Email
Телефон (должен быть реализован ввод с маской)
Пароль (обязательное поле)
Подтверждение пароля (обязательное поле, должно совпадать с паролем)
Кнопка "Зарегистрироваться"

Сопроводительный текст (указан в макете).
При ошибках валидации должно выводиться соответствующее сообщение рядом с полем.

### Страница профиля:

Приветствие с использованием введенного логина.
Ссылка для выхода из профиля ("Выход").

## Логика:

При успешной регистрации или авторизации пользователь должен быть перенаправлен на страницу профиля.
После регистрации данные пользователя сохраняются локально в браузере (localStorage), и при перезагрузке страницы они не должны удаляться.
Сессия пользователя также должна сохраняться при перезагрузке страницы.

## Требования к валидации полей:

Логин: не менее 6 символов на латинице, допускается использование цифр.
Email: должна быть валидация формата
Телефон: должен соответствовать маске: +7 (999) 999-99-99.
Пароль: не менее 6 символов.
Подтверждение пароля: должно совпадать с введенным паролем.

## Требования к результату:

Окончательный результат выполнения задания должен соответствовать дизайну и поставленным требованиям.
Для разработки разрешается использовать препроцессоры и TypeScript.
Необходимо добавить описание сборки в файл README.md.

## Финальный шаг:

Результат необходимо загрузить в репозиторий на GitHub или GitLab и предоставить ссылку на него.

Ссылка на макет: https://www.figma.com/file/H1VcJgU9z1FOpnNjK65PWn/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-meta.studio?node-id=0%3A1

По всем вопросам: https://t.me/whatumesay
