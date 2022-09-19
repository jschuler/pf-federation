import React from 'react';
import {
  Brand,
  Button,
  ButtonVariant,
  Divider,
  Dropdown,
  DropdownGroup,
  DropdownToggle,
  DropdownItem,
  KebabToggle,
  Masthead,
  MastheadBrand,
  MastheadContent,
  MastheadMain,
  MastheadToggle,
  Nav,
  NavItem,
  NavList,
  Page,
  PageSection,
  PageSidebar,
  PageToggleButton,
  SkipToContent,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
  Drawer,
  DrawerPanelContent,
  DrawerContent,
  DrawerContentBody,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  Stack,
  StackItem,
} from '@patternfly/react-core';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import AttentionBellIcon from '@patternfly/react-icons/dist/esm/icons/attention-bell-icon';
import LightbulbIcon from '@patternfly/react-icons/dist/esm/icons/lightbulb-icon';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';

class PageLayoutGrouped extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      isKebabDropdownOpen: false,
      isFullKebabDropdownOpen: false,
      activeItem: 0,
      isDrawerExpanded: false
    };
    this.onDropdownToggle = isDropdownOpen => {
      this.setState({
        isDropdownOpen
      });
    };

    this.onDropdownSelect = event => {
      this.setState({
        isDropdownOpen: !this.state.isDropdownOpen
      });
    };

    this.onKebabDropdownToggle = isKebabDropdownOpen => {
      this.setState({
        isKebabDropdownOpen
      });
    };

    this.onKebabDropdownSelect = event => {
      this.setState({
        isKebabDropdownOpen: !this.state.isKebabDropdownOpen
      });
    };

    this.onNavSelect = result => {
      this.setState({
        activeItem: result.itemId
      });
    };

    this.onFullKebabToggle = isFullKebabDropdownOpen => {
      this.setState({
        isFullKebabDropdownOpen
      });
    };

    this.onFullKebabSelect = () => {
      this.setState({
        isFullKebabDropdownOpen: !this.state.isFullKebabDropdownOpen
      });
    };

    this.onDrawerToggle = () => {
      const isDrawerExpanded = !this.state.isDrawerExpanded;
      this.setState({
        isDrawerExpanded
      });
    };

    this.onDrawerClose = () => {
      this.setState({
        isDrawerExpanded: false
      });
    };
  }

  render() {
    const { isDropdownOpen, isKebabDropdownOpen, activeItem, isFullKebabDropdownOpen, isDrawerExpanded } = this.state;

    const PageNav = (
      <Nav onSelect={this.onNavSelect} aria-label="Nav">
        <NavList>
          <NavItem href="#" itemId={0} isActive={activeItem === 0}>
            System panel
          </NavItem>
          <NavItem href="#" itemId={1} isActive={activeItem === 1}>
            Policy
          </NavItem>
          <NavItem href="#" itemId={2} isActive={activeItem === 2}>
            Authentication
          </NavItem>
          <NavItem href="#" itemId={3} isActive={activeItem === 3}>
            Network services
          </NavItem>
          <NavItem href="#" itemId={4} isActive={activeItem === 4}>
            Server
          </NavItem>
        </NavList>
      </Nav>
    );

    const kebabDropdownItems = [
      <DropdownItem key="settings">
        <CogIcon /> Settings
      </DropdownItem>,
      <DropdownItem key="help">
        <HelpIcon /> Help
      </DropdownItem>
    ];

    const userDropdownItems = [
      <DropdownGroup key="group 2">
        <DropdownItem key="group 2 profile">My profile</DropdownItem>
        <DropdownItem key="group 2 user" component="button">
          User management
        </DropdownItem>
        <DropdownItem key="group 2 logout">Logout</DropdownItem>
      </DropdownGroup>
    ];

    const fullKebabItems = [
      <DropdownGroup key="group 2">
        <DropdownItem key="group 2 profile">My profile</DropdownItem>
        <DropdownItem key="group 2 user" component="button">
          User management
        </DropdownItem>
        <DropdownItem key="group 2 logout">Logout</DropdownItem>
      </DropdownGroup>,
      <Divider key="divider" />,
      <DropdownItem key="kebab-1">
        <CogIcon /> Settings
      </DropdownItem>,
      <DropdownItem key="kebab-2">
        <HelpIcon /> Help
      </DropdownItem>
    ];

    const headerToolbar = (
      <Toolbar id="toolbar" isFullHeight isStatic>
        <ToolbarContent>
          <ToolbarGroup
            variant="icon-button-group"
            alignment={{ default: 'alignRight' }}
            spacer={{ default: 'spacerNone', md: 'spacerMd' }}
          >
            <ToolbarItem>
              <Button aria-label="Toggle drawer" variant={ButtonVariant.plain} onClick={this.onDrawerToggle}>
                <LightbulbIcon color={isDrawerExpanded ? 'yellow' : 'currentColor'} />
              </Button>
            </ToolbarItem>
            <ToolbarItem>
              <Button aria-label="Notifications" variant={ButtonVariant.plain}>
                <AttentionBellIcon />
              </Button>
            </ToolbarItem>
            <ToolbarGroup variant="icon-button-group" visibility={{ default: 'hidden', lg: 'visible' }}>
              <ToolbarItem>
                <Button aria-label="Settings actions" variant={ButtonVariant.plain}>
                  <CogIcon />
                </Button>
              </ToolbarItem>
              <ToolbarItem>
                <Button aria-label="Help actions" variant={ButtonVariant.plain}>
                  <QuestionCircleIcon />
                </Button>
              </ToolbarItem>
            </ToolbarGroup>
            <ToolbarItem visibility={{ default: 'hidden', md: 'visible', lg: 'hidden' }}>
              <Dropdown
                isPlain
                position="right"
                onSelect={this.onKebabDropdownSelect}
                toggle={<KebabToggle onToggle={this.onKebabDropdownToggle} />}
                isOpen={isKebabDropdownOpen}
                dropdownItems={kebabDropdownItems}
              />
            </ToolbarItem>
            <ToolbarItem visibility={{ default: 'visible', md: 'hidden', lg: 'hidden', xl: 'hidden', '2xl': 'hidden' }}>
              <Dropdown
                isPlain
                position="right"
                onSelect={this.onFullKebabSelect}
                toggle={<KebabToggle onToggle={this.onFullKebabToggle} />}
                isOpen={isFullKebabDropdownOpen}
                dropdownItems={fullKebabItems}
              />
            </ToolbarItem>
          </ToolbarGroup>
          <ToolbarItem visibility={{ default: 'hidden', md: 'visible' }}>
            <Dropdown
              position="right"
              onSelect={this.onDropdownSelect}
              isOpen={isDropdownOpen}
              toggle={
                <DropdownToggle onToggle={this.onDropdownToggle}>
                  John Smith
                </DropdownToggle>
              }
              dropdownItems={userDropdownItems}
            />
          </ToolbarItem>
        </ToolbarContent>
      </Toolbar>
    );

    const Header = (
      <Masthead>
        <MastheadToggle>
          <PageToggleButton variant="plain" aria-label="Global navigation">
            <BarsIcon />
          </PageToggleButton>
        </MastheadToggle>
        <MastheadMain>
          <MastheadBrand>
            <Brand src="https://www.patternfly.org/v4/images/logo.4189e7eb1a0741ea2b3b51b80d33c4cb.svg" alt="Patternfly Logo" />
          </MastheadBrand>
        </MastheadMain>
        <MastheadContent>{headerToolbar}</MastheadContent>
      </Masthead>
    );

    const pageId = 'main-content-page-layout-tertiary-nav';
    const PageSkipToContent = <SkipToContent href={`#${pageId}`}>Skip to content</SkipToContent>;

    const panelContent = (
      <DrawerPanelContent isResizable>
        <DrawerHead>
          <span tabIndex={isDrawerExpanded ? 0 : -1}>
            drawer-panel
          </span>
          <DrawerActions>
            <DrawerCloseButton onClick={this.onDrawerClose} />
          </DrawerActions>
        </DrawerHead>
      </DrawerPanelContent>
    );

    const Sidebar = <PageSidebar nav={PageNav} />;

    return (
      <Drawer isExpanded={isDrawerExpanded} isInline onExpand={this.onExpand}>
        <DrawerContent panelContent={panelContent}>
          <DrawerContentBody>
            <Page
              header={Header}
              sidebar={Sidebar}
              isManagedSidebar
              skipToContent={PageSkipToContent}
              mainContainerId={pageId}
              groupProps={{
                stickyOnBreakpoint: { default: 'top' },
              }}
            >
              <PageSection>
                <Stack hasGutter>
                    <StackItem>
                        <Button>Button from host app</Button>
                    </StackItem>
                    {this.props.children}
                </Stack>
              </PageSection>
            </Page>
          </DrawerContentBody>
        </DrawerContent>
      </Drawer>
    );
  }
}

export default PageLayoutGrouped;