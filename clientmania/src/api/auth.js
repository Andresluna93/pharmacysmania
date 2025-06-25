import axios from 'axios'

const API = 'https://pharmacys-apiv.vercel.app/api'

export const registerRequest = user => axios.post(`${API}/estudiante`,user)
export const registerEmbajadorRequest = user => axios.post(`${API}/embajador`,user)