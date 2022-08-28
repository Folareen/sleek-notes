import React from 'react'
import useUser from '../hooks/useUser'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'
import Loading from '../components/Loading'

const Routes = () => {
  const { user, loading} = useUser()


  if (loading){
    return <Loading />
  }
  if (user){
    return <PrivateRoutes />
  }
  return <PublicRoutes />

}

export default Routes