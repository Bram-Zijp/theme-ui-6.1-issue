import React from "react";
import { ThemeProvider, Box } from "theme-ui";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const WhatIsTheme = () => {
  const [state, setState] = React.useState();
  return (
    <Box
      as="pre"
      sx={(x) => {
        if (!state) {
          setState(x);
          console.log(x);
        }
        return {};
      }}
    >
      {JSON.stringify(state, null, 2)}
    </Box>
  );
};

export const decorators = [
  (story) => (
    <ThemeProvider theme={{ fontSizes: [1, 2, 3], space: [1, 2, 3] }}>
      <WhatIsTheme />
      {story()}
    </ThemeProvider>
  ),
];
