import react, { useState } from "react";
//import { Document, Page } from "react-pdf";
import SamplePDF from "./pdfdocoument.pdf";
//import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { Document, Page } from 'react-pdf';
import './style.css';
import testPdf from './test';

const PDFViewer = () => {
    const [show, setShow] = useState(false);
    const [file, setFile] = useState(null);
    const multiPagePdfFile = `data:application/pdf;base64,${testPdf}`;
    const onDocumentLoadSuccess = (data: any) => {
        // setNumPages(data.numPages);
        // console.log(data.numPages);
    }

    const preview = (file: any) => {
        setShow(true);
        setFile(file);
    };

    return (
        <div>
            <button onClick={() => preview(multiPagePdfFile)}>
                Show Pdf
            </button>
        </div>
    )
}

export default PDFViewer;