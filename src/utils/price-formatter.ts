import { CurrencyEnum } from '../constants/currency-enum'

export const priceFormatter = (price: number, currency: string) => {
  const priceFormatted = price.toLocaleString(CurrencyEnum[currency as keyof typeof CurrencyEnum], {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  })

  const amount = Math.trunc(price)
  const decimals = +priceFormatted.slice(-2)

  return { amount, decimals }
}
