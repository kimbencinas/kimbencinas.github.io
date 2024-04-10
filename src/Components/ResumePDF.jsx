import React from 'react';
import { Document, Page } from 'react-pdf';
import KimberlyEncinasResume from '../Files/KimberlyEncinasResume.pdf'

export default function ResumePDF() {
    return (
        <div>
            <Document file={KimberlyEncinasResume.pdf}>
                <Page>
                    <Page pageNumber={1} />
                </Page>
            </Document>
        </div>
    );
}