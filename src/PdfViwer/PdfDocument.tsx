import react, { useState } from "react";
import { Document, Page } from 'react-pdf';
import { PageList } from "./PageList";

interface IPdfDocument {
    file: string;
    fitTo: string;
    scale: number;
    onLoad: (document: any) => void;
    onPageChange: (page: number) => void;
}

const PdfDocument: React.FC<IPdfDocument> = ({ file, onLoad, onPageChange, fitTo, scale }) => {
    const [document, setDocument] = useState<any>({});

    const handleDocumentLoaded = (document: any) => {
        setDocument(document);
        onLoad(document);
    };

    return (
        <>
            <div className="document-container" ref={e => (this.container = e)}>
                {
                    <Document
                        file={file}
                        onLoadSuccess={handleDocumentLoaded}
                    >
                        <PageList
                            //container={this.container}
                            pageCount={document?.numPages}
                            scale={scale}
                            fitTo={fitTo}
                            onPageChange={onPageChange}
                        />
                    </Document>
                }
            </div>
        </>
    )
}

export { PdfDocument };