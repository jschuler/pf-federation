import React from "react";
import Page from "./Page";
import { StackItem, Checkbox } from "@patternfly/react-core";
import "./App.css";
import { ThemeContextProvider } from "@breakaway/shared-context";
// const Remote1 = React.lazy(() => import("remote_01/Remote1"));
// const Remote2 = React.lazy(() => import("remote_02/Remote2"));

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = React.useState(false);
  return (
    <ThemeContextProvider.Provider value={{ dark: useDarkTheme }}>
      <Checkbox
        label="Dark theme"
        isChecked={useDarkTheme}
        onChange={(checked) => {
          setUseDarkTheme(checked);
          if (checked) {
            document.documentElement.classList.add('pf-theme-dark');
          } else {
            document.documentElement.classList.remove('pf-theme-dark')
          }
        }}
        id="controlled-check-1"
        name="check1"
      />
      <Page>
        <React.Suspense fallback="Loading Button">
          <StackItem>
            {/* <Remote1 /> */}
          </StackItem>
          <StackItem>
            {/* <Remote2 /> */}
          </StackItem>
        </React.Suspense>
      </Page>
    </ThemeContextProvider.Provider>
  );
};

export default App;
