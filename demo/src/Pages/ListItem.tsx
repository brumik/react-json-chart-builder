import { Card, CardBody, CardFooter, CardHeader, CardTitle, Label as PFLabel } from '@patternfly/react-core';
import styled from 'styled-components';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { PresetName } from '../schemas/types';
import getPreset from '../schemas';

const Small = styled.small`
  display: block;
  margin-bottom: 10px;
  color: #6a6e73;
  white-space: pre-line;
`;

const Label = styled(PFLabel)`
  margin-right: 10px;
  margin-bottom: 10px;
`;

interface Props {
  slug: PresetName;
}

const ListItem: FC<Props> = ({ slug }) => {
  const { title, description, tags } = getPreset(slug);
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Link to={`/example/${slug}`}>{title}</Link>
        </CardTitle>
      </CardHeader>
      <CardBody><Small>{description}</Small></CardBody>
      <CardFooter>
        {tags.map(tag => (<Label key={tag}>{tag}</Label>))}
      </CardFooter>
    </Card>
  );
};

export default ListItem;
