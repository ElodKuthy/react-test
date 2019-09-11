export const actions = {
  PRODUCT_DETAILS_TAB_CHANGED: 'PRODUCT_DETAILS_TAB_CHANGED'
}

export function changeProductDetailsTab(selectedTab) {
  return {
    type: actions.PRODUCT_DETAILS_TAB_CHANGED,
    payload: {
      selectedTab
    }
  }
}
