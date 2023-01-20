import { proxyWithComputed } from 'valtio/utils'
import { useSnapshot } from 'valtio'
import { pb } from '@/constants/config'

const getAuthUser = () => {
  const jwt = localStorage.getItem('sim-fantasy-jwt')
  if (!jwt) return
  return JSON.parse(jwt)
}

const isValid = pb.authStore.isValid
const token = pb.authStore.token

const state = proxyWithComputed(
  { authUser: getAuthUser()?.record },
  { isAuth: snap => (snap.authUser && isValid ? true : false) }
)

const actions = {
  login: user => {
    localStorage.setItem('sim-fantasy-jwt', JSON.stringify(user))
    state.authUser = user
  },
  logout: async () => {
    localStorage.removeItem('sim-fantasy-jwt')
    state.authUser = null
    await pb.authStore.clear()
  }
}

const useAuth = () => {
  const snap = useSnapshot(state)
  return {
    ...snap,
    ...actions
  }
}

export default useAuth
