import React from 'react';
import { ThemeContextProvider } from "@breakaway/shared-context";
import { NewButton } from "@breakaway/react-core/dist/esm/components/Button/NewButton";

const style = {
  border: "1px solid",
  padding: "10px",
};

const Remote2 = () => {
  const context = React.useContext(ThemeContextProvider);
  return (
    <div style={style}>
      <strong>Hello from remote 2.</strong>
      <div>Here we have the same PF button, but using CSS modules.</div>
      <div>When brought into the host app, it will not pollute the global scope.</div>
      <div>
        <NewButton>PF button using CSS modules</NewButton>
      </div>
      <br />
      <div>
        To support theming, one option would be to replace global
        `:where(.pf-dark-theme) .pf-c-component` classes <br />
        with the simpler `.pf-dark-theme.pf-c-component`
      </div>
      <div>
        Then we can add the CSS module style `styles['pf-dark-theme']`
        conditionally to the component through a prop.
      </div>
      <div>Another way might be to utilize `:global` structures in the CSS (untested).</div>
      <div>
        <NewButton useDarkTheme={context.dark}>
          PF button using CSS modules and themable
        </NewButton>
      </div>
    </div>
  );
};

export default Remote2;
