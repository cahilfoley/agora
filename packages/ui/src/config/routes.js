import React from 'react'
import Typography from '@material-ui/core/Typography'

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
    label: 'FooBar',
    path: '/foobar',
    icon: 'build',
    children: [
      {
        label: 'Foo',
        path: '/foo',
        screen: () => (
          <Typography variant="display2">A foo component</Typography>
        ),
        icon: 'multiline_chart'
      },
      {
        label: 'Bar',
        path: '/bar',
        screen: () => (
          <Typography variant="display2">A bar component</Typography>
        ),
        icon: 'border_all'
      }
    ]
  }
]
