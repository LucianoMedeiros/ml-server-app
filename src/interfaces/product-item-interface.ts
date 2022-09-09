import { IProductPrice } from './product-price-interface'

export interface IProductItem {
  id: string
  title: string
  price: IProductPrice
  picture: string
  condition: string
  free_shipping: boolean
  sold_quantity?: number
  description?: string
  state_address?: string
}
