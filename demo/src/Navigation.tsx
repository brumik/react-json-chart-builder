import React, { FC } from 'react';
import { Nav, NavGroup, NavItem, NavList } from '@patternfly/react-core';
import { Link, useMatch, useResolvedPath, LinkProps } from 'react-router-dom';
import getPreset from './schemas';
import { PresetName } from './schemas/types';

const CustomNavItem:FC<LinkProps> = ({ to, children, ...props }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <NavItem isActive={!!match}>
      <Link to={to} {...props} >{children}</Link>
    </NavItem>
  );
};

const NavDefaultList: FC<Record<string, never>> = () => (
  <Nav>
    <NavList>
      <CustomNavItem to="/">Main page</CustomNavItem>
      <NavGroup title="Examples">
        {Object.values(PresetName).map(key => (
          <CustomNavItem key={key} to={`/example/${key}`}>
            {getPreset(key).title}
          </CustomNavItem>
        ))}
      </NavGroup>
    </NavList>
  </Nav>
)
export default NavDefaultList;
