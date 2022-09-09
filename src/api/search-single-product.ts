import { AxiosError } from 'axios'
import { Request, Response } from 'express'
import { singleProductFactory } from '../factory/single-product-factory'
import { itemsAPI } from './api'

export const searchSingleProduct = (req: Request, res: Response) => {
  const { id } = req.params

  Promise.all([itemsAPI.get(`${id}`), itemsAPI.get(`${id}/description`)])
    .then(response => {
      const productResult = response[0].data
      const descriptionResult = response[1].data

      const result = singleProductFactory(productResult, descriptionResult)

      res.send(result)
    })
    .catch(e => {
      const error = e as AxiosError
      res.send({ error: error.message })
    })
}
