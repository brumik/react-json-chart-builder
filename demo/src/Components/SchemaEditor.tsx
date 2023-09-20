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
        tooltipProps={{ content:'Save code' }}
        onClick={() => {
          setCode(editorText);
        }}
        isVisible={code !== editorText} />}
      code={editorText}
      onChange={setEditorText}
      language={Language.json}
      height='500px'
      shortcutsPopoverButtonText={'View Shortcuts'}
      toolTipCopyExitDelay={1600}
      toolTipDelay={300}
      toolTipMaxWidth={'100px'} />
  );
};

export default SchemaEditor;