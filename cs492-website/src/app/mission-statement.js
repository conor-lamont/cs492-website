import * as React from 'react';
import Box from '@mui/material/Box';
import styles from './styling.css'
export default function MissionStatement() {
    return (
        <Box sx={{ width: '100%', typography: 'body2', color: 'black' }}>
            <div>
                <h1>The Goal</h1>
                <p className='nice-text'>
                    {"The main question we want to answer is whether we need to amend the university's premier job platform, WaterlooWorks, from a discrimination and privacy perspective."}
                </p>
                <h1>The Implementation</h1>
                <ul className='nice-text'>
                    <li>We collected insights from students studying at the University of Waterloo, on their thoughts on some of the problems and potential solutions to the problems.</li>
                    <li>We broke down our project into two parts, firstly we did a research survey to collect data on some questions we have come up with.</li>
                    <li>The second part is this website to display our research findings and more</li>
                </ul>
            </div>
        </Box >
    );
}