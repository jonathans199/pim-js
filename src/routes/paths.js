function path(root, sublink) {
  return `${root}${sublink}`
}

const ROOTS_DASHBOARD = '/dashboard'

export const PATH_AUTH = {
  login: '/login',
}

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  one: path(ROOTS_DASHBOARD, '/one'),
  two: path(ROOTS_DASHBOARD, '/two'),
  three: path(ROOTS_DASHBOARD, '/three'),
  user: {
    root: path(ROOTS_DASHBOARD, '/user'),
    all: path(ROOTS_DASHBOARD, '/user/all'),
    add: path(ROOTS_DASHBOARD, '/user/add'),
    edit: path(ROOTS_DASHBOARD, '/user/edit'),
  },
}
