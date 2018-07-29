import localforage from 'localforage'

localforage.config = {
  name: 'agora-cache',
  version: 1.0,
  description: 'Browser cache for data related to the agora web application'
}

export default localforage
