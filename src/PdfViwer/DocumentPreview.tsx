import React, { useState } from "react";

interface IDocumentPreview {
    file: string;
    fitTo: string;
    toolbar: React.ReactNode;
    show: boolean;
}

const DocumentPreview: React.FC<IDocumentPreview> = ({ fitTo, toolbar, show, file }) => {
    const [scale, setScale] = useState(1);
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState({});
    const [document, setDocument] = useState({})
    const [loadedPages, setloadedPages] = useState<any>();

    const handleDocumentLoaded = (document: any) => {
        setPage(1);
        setPages(document.numPages);
        setDocument(document)
    };

    const handlePageChange = (page: number) => setPage(page);

    return (
        <>
            <div>
                <div>
                    {page && (
                        <div className="page-counter">
                            Page {page} of {pages}
                        </div>
                    )}
                </div>
                <div className="toolbar">
                    {toolbar}
                    <button type="button" className="close">
                        <span aria-hidden="true">×</span>
                        <span className="sr-only">Close</span>
                    </button>
                </div>
                {/* <PdfDocument
                    file={this.props.file}
                    scale={scale}
                    fitTo={fitTo}
                    onLoad={this.handleDocumentLoaded}
                    onPageChange={this.handlePageChange}
                />
                <PdfControls
                    fitTo={fitTo}
                    onZoomToFit={(fitTo) => this.setState({ scale: 1, fitTo })}
                    onZoomIn={() => this.setState({ scale: scale * 1.1 })}
                    onZoomOut={() => this.setState({ scale: Math.max(0.1, scale * 0.9) })}
                /> */}
            </div>
        </>
    )
}

export { DocumentPreview };