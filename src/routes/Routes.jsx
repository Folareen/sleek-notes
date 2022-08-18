import React, {useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

const Routes = () => {
  const { user} = useContext(AuthContext)

  return (
    <>
      {user ? 
      <PrivateRoutes />
      : 
      <PublicRoutes />
      }
    </>
  )
}

export default Routes