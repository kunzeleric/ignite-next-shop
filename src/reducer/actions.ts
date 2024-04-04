import { ProductProps } from '@/context/cart-context'

export enum ActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  UPDATE_QUANTITY = 'UPDATE_QUANTITY',
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

export function updateProductQuantity(productId: string) {
  return {
    type: ActionTypes.UPDATE_QUANTITY,
    payload: productId,
  }
}
