import { createContext, useContext } from 'react';

const AppContext = createContext();


export function SyncedAppWrapper({ children }) {
  let sharedState = {
    pageHeroSynced: false,
    mainFormReference: undefined
  }

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useSyncContext() {
  return useContext(AppContext);
}
