import { Button as PfButton } from "@breakaway/react-core/dist/esm/components/Button";

const customStyles = {
  "--pf-global--spacer--md": "2rem",
  "--pf-c-button--m-primary--BackgroundColor": "yellow",
  "--pf-c-button--m-primary--active--Color": "red",
  "--pf-c-button--m-primary--hover--Color": "purple",
};

const Button = () => (
  <>
    <PfButton variant="primary" style={customStyles}>
      Hello from remote 1
    </PfButton>
  </>
);

export default Button;
