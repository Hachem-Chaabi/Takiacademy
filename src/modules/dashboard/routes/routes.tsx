/* eslint-disable @typescript-eslint/no-explicit-any */
import { RouteProps } from 'react-router-dom'
import { Fragment, lazy } from 'react'
import MainLayout from '../../shared/layout/MainLayout/MainLayout'
// import AuthGuard from '../../shared/guards/AuthGuard'

type RouteConfig = {
  exact: boolean | null
  path: string
  component: React.ComponentType<any>
  guard?: React.ComponentType<any> | typeof Fragment | any
  layout?: React.ComponentType<any> | typeof Fragment
} & RouteProps

const routes: RouteConfig[] = [
  {
    exact: true,
    // guard: AuthGuard,
    path: '/dashboard',
    component: lazy(() => import('../features/Dashboard')),
    layout: MainLayout,
  },
  {
    exact: true,
    // guard: AuthGuard,
    path: '/users',
    component: lazy(() => import('../../shared/features/NotFound/NotFound')),
    layout: MainLayout,
  },
  {
    exact: true,
    // guard: AuthGuard,
    path: '/users/create',
    component: lazy(() => import('../CreateUser/CreateUser')),
    layout: MainLayout,
  },
  {
    exact: true,
    // guard: AuthGuard,
    path: '/users/preview/:userId',
    component: lazy(() => import('../CreateUser/CreateUser')),
    layout: MainLayout,
  },
  {
    exact: true,
    // guard: AuthGuard,
    path: '/users/update/:userId',
    component: lazy(() => import('../CreateUser/CreateUser')),
    layout: MainLayout,
  },
]

export default routes
