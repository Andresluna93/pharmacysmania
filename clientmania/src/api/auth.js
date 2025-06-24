import axios from 'axios'

const API = 'http://localhost:3000/api'

export const registerRequest = user => axios.post(`${API}/estudiante`,user)
export const registerEmbajadorRequest = user => axios.post(`${API}/embajador`,user)