import { ClipboardCopyButton, CodeBlock, CodeBlockAction, CodeBlockCode } from '@patternfly/react-core';
import React, { FC } from 'react';

interface Props {
  code: string;
}

const CustomCodeBlock: FC<Props> = ({
  code
}) => (
  <CodeBlock actions={
    <CodeBlockAction>
      <ClipboardCopyButton
        id="copy-button"
        textId="code-content"
        aria-label="Copy to clipboard"
        onClick={() => void navigator.clipboard.writeText(code)}
        variant="plain"
      >
      Copy to clipboard
      </ClipboardCopyButton>
    </CodeBlockAction>
  }>
    <CodeBlockCode>
      {code}
    </CodeBlockCode>
  </CodeBlock>
);

export default CustomCodeBlock;