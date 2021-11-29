import React, { RefObject, useEffect, useState } from 'react';
import ChartRenderer, { ChartData, ChartSchemaElement, functions } from '../../../src';
import presets, {
  PresetName
} from '../schemas';
import {
  Card,
  CardBody,
  CardFooter,
  Tab,
  TabContent,
  Tabs,
  TabTitleText
} from '@patternfly/react-core';
import CodeBlock from '../Components/CodeBlock';
import { prettyPrint } from '../helpers';
import SchemaEditor from '../Components/SchemaEditor';
import { useParams } from 'react-router-dom';


interface Params {
  slug: PresetName;
}

const Show: React.FunctionComponent<Record<string, never>> = () => {
  const { slug } = useParams<keyof Params>() as Params;
  const [schema, setSchema] = useState<ChartSchemaElement[]>(presets[slug].schema);
  const [data, setData] = useState<ChartData>(presets[slug].data);
  const [activeTabKey, setActiveTabKey] = useState(0);

  const contentRef1: RefObject<HTMLElement> = React.createRef();
  const contentRef2: RefObject<HTMLElement> = React.createRef();

  const handleTabClick = (_event, tabIndex: number) => {
    setActiveTabKey(tabIndex);
  };

  useEffect(() => {
    setSchema(presets[slug].schema);
    setData(presets[slug].data);
  }, [slug]);

  return (
    <Card style={{ maxWidth: '1100px', margin: 'auto' }}>
      <CardBody>
        <ChartRenderer
          schema={schema}
          functions={functions}
          dataState={[data, setData]}
        />
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
        </Tabs>
        <TabContent eventKey={0} id="refTab1Section" ref={contentRef1} aria-label="Schema">
          <SchemaEditor code={prettyPrint(schema)} setCode={(code) => setSchema(JSON.parse(code))} />
        </TabContent>
        <TabContent eventKey={1} id="refTab2Section" ref={contentRef2} aria-label="Data" hidden>
          <CodeBlock code={prettyPrint(data)} />
        </TabContent>
      </CardFooter>
    </Card>
  );
};

export default Show;
