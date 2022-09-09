import { ICategory } from './category-interface'

export interface IResultFilters {
  id: string
  name: string
  type: string
  values: [
    {
      id: string
      name: string
      path_from_root: [ICategory]
    }
  ]
}
