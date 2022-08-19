import React, {useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'
import Loading from '../components/Loading'

const Routes = () => {
  const { user, loading} = useContext(AuthContext)


  if (loading){
    return <Loading />
  }
  if (user){
    return <PrivateRoutes />
  }
  return <PublicRoutes />

}

export default Routes