import { IAuthor } from '../interfaces/author-interface'

export class Author implements IAuthor {
  name: string
  lastname: string

  constructor() {
    this.name = 'Luciano'
    this.lastname = 'Medeiros'
  }

  setAuthor(author: IAuthor): void {
    this.name = author.name
    this.lastname = author.lastname
  }
}
