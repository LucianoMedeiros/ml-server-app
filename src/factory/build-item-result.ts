import { Price } from '../service/price-service'
import { Product } from '../service/product-service'
import { priceFormatter } from '../utils/price-formatter'

export const buildItems = (list: any) => {
  const itemList: Array<any> = []

  const limitResults = 4

  for (let i = 0; i < limitResults; i++) {
    const newPrice = new Price()
    const newProduct = new Product()
    const item = list.results[i]

    newPrice.setPrice({
      currency: item.currency_id,
      amount: priceFormatter(item.price, item.currency_id).amount,
      decimals: priceFormatter(item.price, item.currency_id).decimals,
    })
    newProduct.setProduct({
      id: item.id,
      title: item.title,
      price: newPrice,
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      state_address: item.address.state_name,
    })
    itemList.push(newProduct)
  }

  return itemList
}
