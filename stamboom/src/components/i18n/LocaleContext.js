import React from "react";

const defaultValue = { 
  locale: 'nl', setLocale: () => {}
} 

export default React.createContext(defaultValue);