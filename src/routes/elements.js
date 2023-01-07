import { Suspense, lazy } from 'react'
import LoadingScreen from '../components/loading-screen'

const Loadable = Component => props =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  )

export const LoginPage = Loadable(lazy(() => import('../pages/LoginPage')))

export const PageOne = Loadable(lazy(() => import('../pages/PageOne')))
export const PageTwo = Loadable(lazy(() => import('../pages/PageTwo')))
export const PageThree = Loadable(lazy(() => import('../pages/PageThree')))

export const AllUsers = Loadable(lazy(() => import('../pages/AllUsers')))
export const AddUser = Loadable(lazy(() => import('../pages/userCreate/AddUser')))
export const EditUser = Loadable(lazy(() => import('../pages/userEdit/EditUser')))

export const Page404 = Loadable(lazy(() => import('../pages/Page404')))
