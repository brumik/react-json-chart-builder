import '@patternfly/react-core/dist/styles/base.css';
import React, { RefObject, useState, useEffect } from 'react';
import ChartRenderer, { ChartData, ChartSchemaElement, functions } from '../../src/';
import presets, {
    PresetName,
    humanReadableNames
} from './schemas/';
import '@patternfly/react-core/dist/styles/base.css';
import {
    ActionList,
    ActionListItem,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    ClipboardCopyButton,
    CodeBlock,
    CodeBlockAction,
    CodeBlockCode,
    Tab,
    TabContent,
    Tabs,
    TabTitleText
} from '@patternfly/react-core';
import {
    CodeEditor,
    CodeEditorControl,
    Language
} from '@patternfly/react-code-editor';
import SaveIcon from '@patternfly/react-icons/dist/js/icons/save-icon';

const prettyPrintJson = (json: unknown): string => JSON.stringify(json, null, 2);

/* eslint-disable */
const clipboardCopyFunc = (event, text) => {
    const clipboard = event.currentTarget.parentElement;
    const el = document.createElement('textarea');
    el.value = text.toString();
    clipboard.appendChild(el);
    el.select();
    document.execCommand('copy');
    clipboard.removeChild(el);
};
/* eslint-enable */

const App: React.FunctionComponent<Record<string, never>> = () => {
    const [schema, setSchema] = useState<ChartSchemaElement[]>(presets[PresetName.ANOMALY].schema);
    const [editorCode, setEditorCode] = useState('');
    const [data, setData] = useState<ChartData>(presets[PresetName.ANOMALY].data);
    const [activeTabKey, setActiveTabKey] = useState(0);

    useEffect(() => {
        setEditorCode(prettyPrintJson(schema));
    }, [schema]);

    const changeChart = (presetkey: PresetName) => {
        setSchema(presets[presetkey].schema);
        setData(presets[presetkey].data);
        setEditorCode(prettyPrintJson(presets[presetkey].schema));
    }

    const contentRef1: RefObject<HTMLElement> = React.createRef();
    const contentRef2: RefObject<HTMLElement> = React.createRef();

    const handleTabClick = (_event, tabIndex: number) => {
        setActiveTabKey(tabIndex);
    };

    const actions = (
        <React.Fragment>
            <CodeBlockAction>
                <ClipboardCopyButton
                    id="copy-button"
                    textId="code-content"
                    aria-label="Copy to clipboard"
                    onClick={e => clipboardCopyFunc(e, data)}
                    variant="plain"
                >
                </ClipboardCopyButton>
            </CodeBlockAction>
        </React.Fragment>
    );

    const presetList = (
        <ActionList>
            <ActionListItem>Presets:</ActionListItem>
            {
                Object.values(PresetName).map(key => (
                    <ActionListItem key={key}>
                        <Button variant="link" onClick={() => changeChart(key)}>
                            {humanReadableNames[key]}
                        </Button>
                    </ActionListItem>
                ))
            }
        </ActionList>
    );

    return (
        <Card style={{ maxWidth: '1100px', margin: 'auto' }}>
            <CardTitle>Interactive chart builder app</CardTitle>
            <CardBody>
                <hr />
                {presetList}
                <hr style={{ marginBottom: '10px' }} />
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
                        title={<TabTitleText>Schema code</TabTitleText>}
                        tabContentId="refTab1Section"
                        tabContentRef={contentRef1}
                    />
                    <Tab
                        eventKey={1}
                        title={<TabTitleText>API Data</TabTitleText>}
                        tabContentId="refTab2Section"
                        tabContentRef={contentRef2} />
                </Tabs>
                <div>
                    <TabContent eventKey={0} id="refTab1Section" ref={contentRef1} aria-label="Schema code">
                        <CodeEditor
                            isLineNumbersVisible={true}
                            isMinimapVisible={true}
                            isLanguageLabelVisible
                            isCopyEnabled
                            customControls={
                                <CodeEditorControl
                                    icon={<SaveIcon />}
                                    aria-label="Save code"
                                    toolTipText="Save code"
                                    onClick={() => {
                                        setSchema(JSON.parse(editorCode));
                                    }}
                                    isVisible={prettyPrintJson(schema) !== editorCode}
                                />
                            }
                            code={editorCode}
                            onChange={(value: string) => setEditorCode(value)}
                            language={Language.json}
                            height='500px'
                        />
                    </TabContent>
                    <TabContent eventKey={1} id="refTab2Section" ref={contentRef2} aria-label="API Data" hidden>
                        <CodeBlock actions={actions}>
                            <CodeBlockCode>
                                {prettyPrintJson(data)}
                            </CodeBlockCode>
                        </CodeBlock>
                    </TabContent>
                </div>

            </CardFooter>
        </Card>
    );
};

export default App;
