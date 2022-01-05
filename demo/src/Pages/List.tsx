import { Gallery } from '@patternfly/react-core';
import React, { FC } from 'react';
import { PresetName } from '../schemas/types';
import ListItem from './ListItem';

const List: FC<Record<string, never>> = () => (
  <Gallery
    hasGutter
    minWidths={{
      sm: '307px',
      md: '307px',
      lg: '307px',
      xl: '307px',
      '2xl': '307px'
    }}
  >
    {Object.values(PresetName).map((slug) => (
      <ListItem key={slug} slug={slug} />
    ))}
  </Gallery>
);
export default List;
