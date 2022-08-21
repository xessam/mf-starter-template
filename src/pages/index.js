import React from 'react';

import GlobalStyles from '@contexts/theme/global-styles';
import { GlobalProvider } from '@contexts/global-store';
import TogglePanel from '@views/toggle-panel';

function App() {
  return (
    <GlobalProvider>
      <GlobalStyles />

      <TogglePanel />
    </GlobalProvider>
  );
}

export default App;
