import { Helmet } from 'react-helmet-async'
import { Container } from '@mui/material'

import { PATH_DASHBOARD } from '../../routes/paths'

import { useSettingsContext } from '../../components/settings'
import CustomBreadcrumbs from '../../components/custom-breadcrumbs'

import UserCreateForm from './UserEditForm'

export default function UserCreatePage() {
  const { themeStretch } = useSettingsContext()

  return (
    <>
      <Helmet>
        <title> User: Edit user | CF PIM</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Create a new user"
          links={[
            {
              name: 'Dashboard',
              href: PATH_DASHBOARD.root
            },
            {
              name: 'User',
              href: PATH_DASHBOARD.user.all
            },
            { name: 'New user' }
          ]}
        />
        <UserCreateForm />
      </Container>
    </>
  )
}
