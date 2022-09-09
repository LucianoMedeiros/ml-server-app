import { IAuthor } from '../interfaces/author-interface'
import { IItemResult } from '../interfaces/item-result-interface'
import { IProductItem } from '../interfaces/product-item-interface'
import { Author } from './author-service'
import { Product } from './product-service'

export class ItemResult implements IItemResult {
  author: IAuthor
  categories: [string]
  items: [IProductItem]

  constructor() {
    this.author = new Author()
    this.categories = ['']
    this.items = [new Product()]
  }

  setItemResult(itemResult: IItemResult): void {
    this.author = itemResult.author
    this.categories = itemResult.categories
    this.items = itemResult.items
  }
}
