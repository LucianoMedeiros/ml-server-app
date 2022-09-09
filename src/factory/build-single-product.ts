import { Price } from '../service/price-service'
import { Product } from '../service/product-service'
import { priceFormatter } from '../utils/price-formatter'

export const buildSingleProduct = (item: any, description: any) => {
  const newProduct = new Product()
  const newPrice = new Price()

  newPrice.setPrice({
    currency: item.currency_id,
    amount: priceFormatter(item.price, item.currency_id).amount,
    decimals: priceFormatter(item.price, item.currency_id).decimals,
  })
  newProduct.setProduct({
    id: item.id,
    title: item.title,
    price: newPrice,
    picture: item.pictures[0].url,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
    sold_quantity: item.sold_quantity,
    description: description.plain_text,
  })

  return newProduct
}
