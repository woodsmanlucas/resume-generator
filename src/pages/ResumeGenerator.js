import * as React from 'react';
import FrameworksAndLanguagesDict from '../utils/FrameworksAndLanguagesDict';

function ResumeGenerator() {
    return (
        <>
            {Object.keys(FrameworksAndLanguagesDict).map((FrameworkOrLanguage) => {
                return <h1>{FrameworkOrLanguage}</h1>
            })}
        </>
    )
}

export default ResumeGenerator;