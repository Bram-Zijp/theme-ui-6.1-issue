import React from "react";
import { ThemeProvider, Box } from "theme-ui";

const WhatIsTheme = () => {
  const [state, setState] = React.useState<any>();
  return (
    <Box
      as="pre"
      sx={(x: any) => {
        if (!state) {
          setTimeout(() => {
            setState(x);
            console.log(x);
          });
        }
        return {};
      }}
    >
      {JSON.stringify(state, null, 2)}
    </Box>
  );
};

function App() {
  return (
    <ThemeProvider theme={{ fontSizes: [1, 2, 3], space: [1, 2, 3] }}>
      <WhatIsTheme />
    </ThemeProvider>
  );
}

export default App;
