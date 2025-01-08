import React from 'react';
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import PracticalExperience from './PracticalExperience';

function CVForm () {
    return (
        <div className='cv-form'>
            <GeneralInfo />
            <Education />
            <PracticalExperience />
        </div>
    );
}

export default CVForm;