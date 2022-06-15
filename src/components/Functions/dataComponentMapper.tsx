import { ExclamationCircleIcon as ExclamationCircleIcon } from '@patternfly/react-icons';
import React, { FC } from 'react';

export const dataComponentMapper = (name: string): React.ReactNode => {
  switch (name) {
    case 'ExclamationCircleIcon':
      return <ExclamationCircleIconPoint />;
    default:
      return null;
  }
};

interface Props {
  x?: number;
  y?: number;
}

const ExclamationCircleIconPoint: FC<Props> = ({ x, y, ...props }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <ExclamationCircleIcon x={x-8} y={y-8} {...props} />;
};
