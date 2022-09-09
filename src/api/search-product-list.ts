import { AxiosError } from 'axios'
import { Request, Response } from 'express'
import { itemResultFactory } from '../factory/item-result-factory'
import { searchAPI } from './api'

export const searchProductList = (req: Request, res: Response) => {
  const query = req.query.q

  searchAPI
    .get(`search?q=${query}`)
    .then(response => {
      const result = itemResultFactory(response.data)
      res.send(result)
    })
    .catch(e => {
      const error = e as AxiosError
      res.send({ error: error.message })
    })
}
