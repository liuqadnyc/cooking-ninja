export const themeReducer = (state, action) => {
  switch (action.type) {
    case 'Change_Color':
      return { ...state, color: action.payload }
    default:
      return state
  }
}
