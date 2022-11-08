import React from "react";
import { ThemeContextProvider } from "@breakaway/shared-context";
import { Button } from "@breakaway/react-core/dist/esm/components/Button/Button";

const customStyles = {
  "--pf-global--spacer--md": "3rem",
  "--pf-global--spacer--form-element": "1rem",
  "--pf-c-button--m-primary--BackgroundColor": "yellow",
  "--pf-c-button--m-primary--active--Color": "red",
  "--pf-c-button--m-primary--hover--Color": "purple",
  "--pf-c-button--m-primary--Color": "black",
};

const style = {
  border: "1px solid",
  padding: "10px",
};

const Remote1 = () => {
  const context = React.useContext(ThemeContextProvider);
  return (
    <div style={style}>
      <strong>Hello from remote 1.</strong>
      <div>This PatternFly button imports CSS when brought into the host app.</div>
      <div>This causes 2 issues:</div>
      <div>1. Multiple of the same pf-c-button class definitions are loaded</div>
      <div>2. Different versions of the pf-c-button classes can cause unintended style changes to the host app.</div>
      <div>
        <Button variant="primary">
          Newer PF button. I should have a purple background and yellow text.
        </Button>
      </div>
      <div>
        One way to mitigate multiple classes from loading in the host app,{" "}
        <br />
        would be to apply a null-loader to react-styles in the production
        output.
      </div>
      <br/>
      <div>
        The problem with that is, if you depend on new class definitions like this button does, <br />
        after the null-loader those styles will be missing when the component is
        loaded into the host.
      </div>
    </div>
  );
};

export default Remote1;
