export const themeReducer = (state, action) => {
  switch (action.type) {
    case 'Change_Color':
      return { ...state, color: action.payload }
    case 'Change_Mode':
      return { ...state, mode: action.payload }
    default:
      return state
  }
}
