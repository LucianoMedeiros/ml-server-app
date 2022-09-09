import { IAuthor } from './author-interface'
import { IProductItem } from './product-item-interface'

export interface IItemResult {
  author: IAuthor
  categories: [string]
  items: [IProductItem]
}
