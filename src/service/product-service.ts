import { IProductItem } from '../interfaces/product-item-interface'
import { IProductPrice } from '../interfaces/product-price-interface'
import { Price } from './price-service'

export class Product implements IProductItem {
  id: string
  title: string
  price: IProductPrice
  picture: string
  condition: string
  free_shipping: boolean
  sold_quantity: number
  description: string
  state_address: string

  constructor() {
    this.id = ''
    this.title = ''
    this.price = new Price()
    this.picture = ''
    this.condition = ''
    this.free_shipping = false
    this.sold_quantity = -1
    this.description = ''
    this.state_address = ''
  }

  setProduct(product: IProductItem): void {
    this.id = product.id
    this.title = product.title
    this.price = product.price
    this.picture = product.picture
    this.condition = product.condition
    this.free_shipping = product.free_shipping
    product.sold_quantity ? (this.sold_quantity = product.sold_quantity) : false
    product.description ? (this.description = product.description) : false
    product.state_address ? (this.state_address = product.state_address) : false
  }
}
