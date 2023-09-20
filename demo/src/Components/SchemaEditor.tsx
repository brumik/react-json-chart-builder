import React, { FC, useEffect, useState } from 'react';
import { CodeEditor, CodeEditorControl, Language } from '@patternfly/react-code-editor';
import SaveIcon from '@patternfly/react-icons/dist/js/icons/save-icon';

interface Props {
  code: string;
  setCode: (code: string) => void;
}

const SchemaEditor: FC<Props> = ({
  code,
  setCode
}) => {
  const [editorText, setEditorText] = useState(code);

  useEffect(() => {
    setEditorText(code);
  }, [code])

  return (
    <CodeEditor
      isLineNumbersVisible
      isLanguageLabelVisible
      isCopyEnabled
      customControls={<CodeEditorControl
        icon={<SaveIcon />}
        aria-label="Save code"
        toolTipText="Save code"
        onClick={() => {
          setCode(editorText);
        }}
        isVisible={code !== editorText} />}
      code={editorText}
      onChange={setEditorText}
      language={Language.json}
      height='500px' />
  );
};

export default SchemaEditor;