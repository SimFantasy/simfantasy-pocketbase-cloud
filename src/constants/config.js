import PocketBase from 'pocketbase'

export const pocketBaseUri = import.meta.env.VITE_POCKETBASE_URI
export const pb = new PocketBase(pocketBaseUri)
