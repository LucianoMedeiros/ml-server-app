import cors from 'cors'
import express from 'express'
import { searchProductList } from './api/search-product-list'
import { searchSingleProduct } from './api/search-single-product'

class App {
  public express: express.Application

  public constructor() {
    this.express = express()
    this.middlewares()
    this.routes()
  }

  private middlewares(): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private routes(): void {
    this.express.get('/api/items', searchProductList)
    this.express.get('/api/items/:id', searchSingleProduct)
  }
}

export default new App().express
