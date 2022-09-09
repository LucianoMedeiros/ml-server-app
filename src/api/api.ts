import axios from 'axios'
import * as dotenv from 'dotenv'

dotenv.config()

export const searchAPI = axios.create({
  baseURL: process.env.API_SEARCH_BASE_URL,
})

export const itemsAPI = axios.create({
  baseURL: process.env.API_ITEMS_BASE_URL,
})
