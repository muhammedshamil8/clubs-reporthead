import React from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import MyDocument from './MyDocument';

function App() {
    return (
        <div className='flex items-center justify-center mx-auto w-full text-center flex-col'>
            <h1 className='text-center'>View PDF Report</h1>
            <div className='flex flex-col'>
                <PDFDownloadLink document={<MyDocument />} fileName="report.pdf">
                    {({ blob, url, loading, error }) =>
                        loading ? 'Loading document...' : 'Download PDF'
                    }
                </PDFDownloadLink>
                <div className='flex items-center justify-center mx-auto w-full text-center'>
                    <PDFViewer width="800px" height="850">
                            <MyDocument />
                    </PDFViewer>
                </div>
            </div>

        </div>
    );
}

export default App;
