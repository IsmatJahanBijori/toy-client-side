import React, { useState } from 'react';

const TermsAndConditions = () => {
    const [showTerms, setShowTerms] = useState(false);
    const [showDownload, setShowDownload] = useState(false);

    const handleTermsClick = () => {
        setShowTerms(!showTerms);
    };

    const handleDownloadClick = () => {
        setShowDownload(true);
    };

    return (
        <div className="bg-gradient-to-r font-serif from-slate-200 via-pink-200 to-base-100 my-20 md:px-0 ml-10 md:ml-32 text-xl bg-base-200 w-[300px] text-center shadow-xl p-3 mb-20 mx-auto">
            <button className="" onClick={handleTermsClick}>
                {showTerms ? 'Terms and Conditions' : 'Terms and Conditions'}
            </button>
            {showTerms && (
                <div>
                    {!showDownload && (
                        <a href="/terms.txt" download><button className="" onClick={handleDownloadClick}>
                        Download
                    </button></a> 
                    )}
                </div>
            )}
        </div>
    )
};

export default TermsAndConditions;