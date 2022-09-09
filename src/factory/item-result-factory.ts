import { Author } from '../service/author-service'
import { buildCategories } from './build-categories'
import { buildItems } from './build-item-result'

export const itemResultFactory = (result: any) => {
  const categoryList = buildCategories(result)
  const itemList = buildItems(result)

  const newResult: Object = {
    author: new Author(),
    categories: categoryList,
    items: itemList,
  }
  return JSON.stringify(newResult)
}
