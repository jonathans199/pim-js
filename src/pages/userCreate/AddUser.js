import { Helmet } from 'react-helmet-async'
import { Container } from '@mui/material'

import { PATH_DASHBOARD } from '../../routes/paths'

import { useSettingsContext } from '../../components/settings'
import CustomBreadcrumbs from '../../components/custom-breadcrumbs'
import UserCreateForm from './UserCreateForm'

export default function AddUser() {
  const { themeStretch } = useSettingsContext()

  return (
    <>
      <Helmet>
        <title> Add User | CF PIM</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <CustomBreadcrumbs
          heading="Create a new user"
          links={[
            {
              name: 'Dashboard',
              href: PATH_DASHBOARD.root
            },
            {
              name: 'User',
              href: PATH_DASHBOARD.user.list
            },
            { name: 'New user' }
          ]}
        />

        <UserCreateForm />
      </Container>
    </>
  )
}
