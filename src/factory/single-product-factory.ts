import { Author } from '../service/author-service'
import { buildSingleProduct } from './build-single-product'

export const singleProductFactory = (product: any, description: any) => {
  const productItem = buildSingleProduct(product, description)

  const newResult: Object = {
    author: new Author(),
    item: productItem,
  }
  return JSON.stringify(newResult)
}
