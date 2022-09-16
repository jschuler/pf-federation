import '@patternfly/react-core/dist/styles/base.css';
import { Button as PfButton } from '@patternfly/react-core';
import './Button.css';

// const bgColor = { '--pf-c-button--m-primary--BackgroundColor': 'yellow' };
const bgColor = {};

const Button = () => <PfButton variant="primary" style={bgColor}>Hello from remote 2</PfButton>;

export default Button;
