import React from 'react';

interface PageContainerProps {
    id?: string;
}

export const PageContainer = ({
    id,
    children,
}: React.PropsWithChildren<PageContainerProps>) => {
    return (
        <div id={id} className="container page-container">
            {children}
        </div>
    );
};
