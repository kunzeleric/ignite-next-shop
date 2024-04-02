import { ProductProps } from '@/pages/product/[id]'

export enum ActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
}

export function addProduct(product: ProductProps) {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: product,
  }
}

export function removeProduct(productId: string) {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: productId,
  }
}
