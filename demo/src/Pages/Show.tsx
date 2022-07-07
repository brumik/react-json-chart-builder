import React, { RefObject, useEffect, useState } from 'react';
import ChartRenderer, {
  ChartData,
  ChartFunctions,
  ChartSchemaElement,
  functions as defaultFunctions
} from '../../../src';
import getPreset from '../schemas';
import { PresetName } from '../schemas/types';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Label,
  Stack,
  StackItem,
  Tab,
  TabContent,
  Tabs,
  TabTitleText
} from '@patternfly/react-core';
import CodeBlock from '../Components/CodeBlock';
import { mergeDeep, prettyPrint, printFunctions } from '../helpers';
import SchemaEditor from '../Components/SchemaEditor';
import { useParams } from 'react-router-dom';

interface Params {
  slug: PresetName;
}

const Show: React.FunctionComponent<Record<string, never>> = () => {
  const { slug } = useParams() as Params;
  const [preset, setPreset] = useState(getPreset(slug));
  const [schema, setSchema] = useState<ChartSchemaElement[]>([]);
  const [data, setData] = useState<ChartData>(null);
  const [functions, setFunctions] = useState<ChartFunctions>({});
  const [activeTabKey, setActiveTabKey] = useState(0);

  const contentRef1: RefObject<HTMLElement> = React.createRef();
  const contentRef2: RefObject<HTMLElement> = React.createRef();
  const contentRef3: RefObject<HTMLElement> = React.createRef();
  const contentRef4: RefObject<HTMLElement> = React.createRef();

  const handleTabClick = (_event, tabIndex: number) => {
    setActiveTabKey(tabIndex);
  };

  useEffect(() => {
    setSchema(preset.schema);
    setData(preset.data);
    setFunctions(preset?.functions ?? {})
  }, [preset]);

  useEffect(() => {
    setPreset(getPreset(slug));
  }, [slug]);

  if (schema.length < 1 || !data) return null;

  return (
    <Card style={{ maxWidth: '1100px', margin: 'auto' }}>
      <CardHeader>
        <CardTitle>{preset.title}</CardTitle>
      </CardHeader>
      <CardBody>
        <Stack hasGutter>
          <StackItem>
            {preset.tags.map(tag => (<Label style={{ margin: '0 10px 0 0' }} key={tag}>{tag}</Label>))}
          </StackItem>
          <StackItem>{preset.description}</StackItem>
          <StackItem>
            <ChartRenderer
              schema={schema}
              functions={mergeDeep(defaultFunctions, functions)}
              dataState={[data, setData]}
            />
          </StackItem>
        </Stack>
      </CardBody>
      <CardFooter>
        <Tabs activeKey={activeTabKey} onSelect={handleTabClick}>
          <Tab
            eventKey={0}
            title={<TabTitleText>Schema</TabTitleText>}
            tabContentId="refTab1Section"
            tabContentRef={contentRef1}
          />
          <Tab
            eventKey={1}
            title={<TabTitleText>Data</TabTitleText>}
            tabContentId="refTab2Section"
            tabContentRef={contentRef2} />
          <Tab
            eventKey={4}
            title={<TabTitleText>Additional functions</TabTitleText>}
            tabContentId="refTab4Section"
            tabContentRef={contentRef4} />
          <Tab
            eventKey={3}
            title={<TabTitleText>Default functions (compiled)</TabTitleText>}
            tabContentId="refTab3Section"
            tabContentRef={contentRef3} />
        </Tabs>
        <TabContent eventKey={0} id="refTab1Section" ref={contentRef1} aria-label="Schema">
          <SchemaEditor code={prettyPrint(schema)} setCode={(code) => setSchema(JSON.parse(code))} />
        </TabContent>
        <TabContent eventKey={1} id="refTab2Section" ref={contentRef2} aria-label="Data" hidden>
          <CodeBlock code={prettyPrint(data)} />
        </TabContent>
        <TabContent eventKey={2} id="refTab3Section" ref={contentRef3} aria-label="Default functions" hidden>
          <CodeBlock code={printFunctions(defaultFunctions)} />
        </TabContent>
        <TabContent eventKey={3} id="refTab4Section" ref={contentRef4} aria-label="Additional functions" hidden>
          <CodeBlock code={printFunctions(functions)} />
        </TabContent>
      </CardFooter>
    </Card>
  );
};

export default Show;
