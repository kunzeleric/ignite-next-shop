import { ProductProps } from '@/pages/product/[id]'
import { ActionTypes } from './actions'

export interface Product {
  id: string
  name: string
  imageUrl: string
  price: string
}

export interface ProductState {
  products: Product[]
}

export function productReducer(state: ProductState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      }

    case ActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products.filter((product) => product.id !== action.payload),
        ],
      }

    default:
      return state
  }
}
