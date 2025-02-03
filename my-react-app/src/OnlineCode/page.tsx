import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { Container, Row, Col, Card } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CodeEditor() {
  const [html, setHtml] = useState("<h1>Hello World</h1>");
  const [css, setCss] = useState("h1 { color: red; }");
  const [js, setJs] = useState("console.log('Hello World');");

  const srcDoc = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}<\/script>
      </body>
    </html>
  `;

  return (
    <Container fluid className="vh-100 d-flex flex-column">
      {/* Üç editörü yatay olarak hizala */}
      <Row md={12} className="flex-grow-1">
       
      <Card style={{ width: '25rem' ,height :'35rem' }} className="p-2">
        
          <Editor height="100%" language="html" theme="vs-dark" value={html} onChange={(value) => setHtml(value || "")} />
        
        </Card> 
        <Card style={{ width: '25rem',height :'35rem' }} className="p-2">
        
          <Editor height="100%" language="css" theme="vs-dark" value={css} onChange={(value) => setCss(value || "")} />
          </Card> 
        <Card style={{ width: '25rem',height :'35rem' }} className="p-2">
        
          <Editor height="100%" language="javascript" theme="vs-dark" value={js} onChange={(value) => setJs(value || "")} />
          </Card> 
      </Row>
      {/* Önizleme kısmı tam genişlikte ve responsive */}
      <Row className="flex-grow-1">
        <Col className="p-2">
          <iframe className="w-100 h-100 border-20" srcDoc={srcDoc} title="Output" />
        </Col>
      </Row>
    </Container>
  );
}