import { ICategory } from '../interfaces/category-interface'
import { IResultFilters } from '../interfaces/result-filters-interface'

export const buildCategories = (results: any) => {
  const categoryList: Array<string | any> = []

  results.filters.map((item: IResultFilters, i: number) => {
    if (item.id === 'category') {
      item.values[0].path_from_root.map((item: ICategory) => {
        categoryList.push(item.name)
      })
    }
  })

  return categoryList
}
