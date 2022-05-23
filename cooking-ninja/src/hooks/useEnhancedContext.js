import { useContext } from "react";

export const useEnhancedContext = (context) => {
  const enhancedContext = useContext(context);

  if (enhancedContext === undefined) {
    throw new Error("useEnhanceContext() must be used inside a ThemeProvider")
  }

  return enhancedContext;
}
