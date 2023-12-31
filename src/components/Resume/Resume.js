import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import './Resume.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function togglePage() {
    setPageNumber(prevPageNumber => prevPageNumber === 1 ? 2 : 1);
  }

  return (
    <div className="Resume">
      <Document
        file="resume.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} className="Page" />
      </Document>
      <p className="page-counter">Page {pageNumber} of {numPages}</p>
      <button className="toggle-button" onClick={togglePage}>Toggle Page</button>
    </div>
  );
}

export default Resume;
