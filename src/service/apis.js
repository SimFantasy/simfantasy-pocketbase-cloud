import { pb } from '@/constants/config'

const Auth = {
  login: async user => await pb.collection('users').authWithPassword(user.identity, user.password),
  logout: async () => await pb.authStore.clear(),
  refresh: async () => await pb.collection('user').authRefresh()
}

const Base = {
  all: async (collection, config) => await pb.collection(collection).getFullList(100, config),
  list: async (collection, page, perPage, config) =>
    await pb.collection(collection).getList(page, perPage, config),
  view: async (collection, id, config) => await pb.collection(collection).getOne(id, config),
  create: async (collection, data) => await pb.collection(collection).create(data),
  update: async (collection, id, data) => await pb.collection(collection).update(id, data),
  delete: async (collection, id) => await pb.collection(collection).delete(id)
}

export default {
  Auth,
  Base
}
