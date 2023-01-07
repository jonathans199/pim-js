import { Helmet } from 'react-helmet-async'
import Login from '../sections/auth/Login'
// import Login from '../../sections/auth/LoginAuth0';

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Login | pim-js</title>
      </Helmet>

      <Login />
    </>
  )
}
