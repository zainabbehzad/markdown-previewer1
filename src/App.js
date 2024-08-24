import { useState } from 'react';
import { marked } from 'marked';
import './App.css';

function App() {
  const [text, setText] = useState(`
# Header 1


## Subheader 2,



This is a [link](https://www.example.com).

This is some \`inline code\`.

\`\`\`
// This is a code block
function example() {
  console.log('Hello, world!');
}
\`\`\`

- List item

> This is a blockquote.

![An image](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_zSGpbTJzpsyxCV8n0GVO3wcD3rAfPqewTQ&s)

**This is bolded text.**
`);

  marked.setOptions({
    breaks: true,
  });

  const renderedMarkdown = marked(text, { sanitize: true });

  return (
    <div className="App">
      <textarea id="editor" onChange={(event) => setText(event.target.value)}>{text}</textarea>
      <div id="preview" dangerouslySetInnerHTML={{ __html: renderedMarkdown }} />
    </div>
  );
}

export default App;
