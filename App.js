import React from "react";

import MainNavigator from "./src/components/Navigator";

import { GlobalProvider } from "./src/context/global/global.context";

export default function App() {
  return (
    <GlobalProvider>
      <MainNavigator />
    </GlobalProvider>
  ); 
}

