interface Route {
  path: string
  name: string
}

export const HOME_ROUTE: Route = {
  path: '/',
  name: 'home',
}

export const REGISTER_ROUTE: Route = {
  path: '/register',
  name: 'register',
}
