import _axios from "../axios";

export type Post = {
  title: string;
  body: string;
}

const PostAPI = {
  list: async () => {
    return await _axios.get('/posts')
  },
  create: async (params: Post) => {
    return await _axios.post('/posts', params)
  },
  detail: async (id: number) => {
    return await _axios.get(`/posts/${id}`)
  },
  modify: async (id: number, params: Post) => {
    return await _axios.put(`/posts/${id}`, params)
  },
  delete: async (id: number) => {
    return await _axios.delete(`/posts/${id}`)
  }
}

export { PostAPI }