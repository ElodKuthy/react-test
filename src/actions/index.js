export const actions = {
  PRODUCT_DETAILS_TAB_CHANGED: 'PRODUCT_DETAILS_TAB_CHANGED',
  PRODUCT_VARIANT_CHANGED: 'PRODUCT_VARIANT_CHANGED',
  ADD_TO_CART_STARTED: 'ADD_TO_CART_STARTED',
  ADD_TO_CART_COMPLETED: 'ADD_TO_CART_COMPLETED'
}

export function changeProductDetailsTab(selectedTab) {
  return {
    type: actions.PRODUCT_DETAILS_TAB_CHANGED,
    payload: {
      selectedTab
    }
  }
}

export function changeProductVariant(selectedVariant) {
  return {
    type: actions.PRODUCT_VARIANT_CHANGED,
    payload: {
      selectedVariant
    }
  }
}

export function startAddToCart() {
  return {
    type: actions.ADD_TO_CART_STARTED,
    payload: {}
  }
}

export function completeAddToCart() {
  return {
    type: actions.ADD_TO_CART_COMPLETED,
    payload: {}
  }
}
