import { IProductPrice } from '../interfaces/product-price-interface'

export class Price implements IProductPrice {
  public currency: string
  public amount: number
  public decimals: number

  constructor() {
    this.currency = ''
    this.amount = -1
    this.decimals = -1
  }

  setPrice(price: IProductPrice): void {
    this.currency = price.currency
    this.amount = price.amount
    this.decimals = price.decimals
  }
}
