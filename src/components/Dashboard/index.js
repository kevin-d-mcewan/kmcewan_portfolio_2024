import { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import UploadItem from './home'
import Login from '../Login/old_build/index'

const Dashboard = () => {
  const [user, setUser] = useState(null)
  const auth = getAuth()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })
  }, [])

  return <div>{user ? <UploadItem /> : <Login />}</div>
}

export default Dashboard
