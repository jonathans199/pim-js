import { PATH_DASHBOARD } from '../../../routes/paths'

import SvgColor from '../../../components/svg-color'

const icon = name => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
)

const ICONS = {
  user: icon('ic_user'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard')
}

const navConfig = [
  {
    subheader: 'general',
    items: [
      { title: 'One', path: PATH_DASHBOARD.one, icon: ICONS.dashboard },
      { title: 'Two', path: PATH_DASHBOARD.two, icon: ICONS.ecommerce },
      { title: 'Three', path: PATH_DASHBOARD.three, icon: ICONS.analytics }
    ]
  },

  {
    subheader: 'management',
    items: [
      {
        title: 'user',
        path: PATH_DASHBOARD.user.root,
        icon: ICONS.user,
        children: [
          { title: 'All Users', path: PATH_DASHBOARD.user.all },
          { title: 'Create', path: PATH_DASHBOARD.user.add },
          { title: 'Edit', path: PATH_DASHBOARD.user.edit }
        ]
      }
    ]
  }
]

export default navConfig
