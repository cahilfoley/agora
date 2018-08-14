import React from 'react'
import Typography from '@material-ui/core/Typography'
import asyncScreen from 'components/Utils/AsyncScreen'

const Animations = asyncScreen(() => import('screens/Animations'))
const Visualizations = asyncScreen(() => import('screens/Visualizations'))

export default [
  {
    path: '/',
    exact: true,
    redirect: '/home'
  },
  {
    label: 'Home',
    path: '/home',
    screen: () => <Typography variant="display2">The home page</Typography>,
    icon: 'home'
  },
  {
    label: 'Projects',
    path: '/projects',
    icon: 'memory',
    children: [
      {
        label: 'Animations',
        path: '/animations',
        screen: Animations,
        icon: 'movie'
      },
      {
        label: 'Data Visuals',
        path: '/visualizations',
        screen: Visualizations,
        icon: 'bar_chart'
      }
    ]
  }
]
