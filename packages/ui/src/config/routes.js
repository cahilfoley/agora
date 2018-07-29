import React from 'react'

export default [
  {
    path: '/',
    exact: true,
    redirect: '/home'
  },
  {
    label: 'Home',
    path: '/home',
    screen: () => <h1>The home page</h1>,
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
        screen: () => <h1>A foo component</h1>,
        icon: 'multiline_chart'
      },
      {
        label: 'Bar',
        path: '/bar',
        screen: () => <h1>A bar component</h1>,
        icon: 'border_all'
      }
    ]
  }
]
