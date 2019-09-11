export const actions = {
  PRODUCT_DETAILS_TAB_CHANGED: 'PRODUCT_DETAILS_TAB_CHANGED',
  PRODUCT_VARIANT_CHANGED: 'PRODUCT_VARIANT_CHANGED'
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
