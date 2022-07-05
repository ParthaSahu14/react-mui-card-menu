import React, { useState } from 'react';

interface IPageList {
    fitTo: string;
    scale: number;
    pageCount: number;
    onPageChange: (page: number) => void;
}

const PageList: React.FC<IPageList> = ({ fitTo, scale, pageCount, onPageChange }) => {
    const [pages, setPages] = useState<any>({})

    const handleWaypointEnter = (page) => {
        page && this.props.onPageChange(page.pageIndex + 1);
    };

    const renderPage = () => {

    }

    return (
        <>
            <div className="page-list">
                {[...Array.from(Array(pageCount).keys())].map(index =>
                    this.renderPage({
                        index,
                        key: `page-${index}`
                    })
                )}
            </div>
        </>
    )
}


export { PageList };

//https://codesandbox.io/s/document-preview-forked-elfmuq?file=/src/PageList.js:1096-1101     