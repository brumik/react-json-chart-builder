import React, { FunctionComponent } from 'react';
import {
    EmptyState,
    EmptyStateBody,
    EmptyStateIcon,
    Title
} from '@patternfly/react-core';
import CubesIcon from '@patternfly/react-icons/dist/js/icons/cubes-icon';

const ErrorState: FunctionComponent<Record<string, never>> = () => (
    <EmptyState>
        <EmptyStateIcon icon={CubesIcon} />
        <Title headingLevel="h4" size="lg">
            Error
        </Title>
        <EmptyStateBody>
            The api returned an error while fetching the data for the chart.
        </EmptyStateBody>
    </EmptyState>
);

export default ErrorState;