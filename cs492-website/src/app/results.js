import * as React from 'react';
import Box from '@mui/material/Box';
import styles from './styling.css'
import Image from 'next/image'

import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AlertDialog from './test-dialog';

export default function Results() {
    return (
        <Box sx={{ width: '100%', typography: 'body2', color: 'black' }}>
            <div>
                <p className='header-text'>
                    Our survey had some quite interesting results. Take a look for yourself!
                </p>
                <div >
                    <h2>Privacy</h2>
                    <div className='question-dialogs'>
                        <AlertDialog
                            img_width={541}
                            img_height={260}
                            img_src='/q1-trust.png'
                            img_alt='60.4% trust WaterlooWorks, 39.6% do not' button_txt='Q1: Trust'
                            title='Do you trust WaterlooWorks to handle your data responsibly and ethically?'
                        />

                        <AlertDialog
                            img_width={600}
                            img_height={261}
                            img_src='/q2-storage-transparency.png'
                            img_alt='90.6% Yes, 9.4% No' button_txt='Q2: Storage Transparency'
                            title='Should WaterlooWorks provide publicly available information on how it stores your data?'
                        />

                        <AlertDialog
                            img_width={607}
                            img_height={260}
                            img_src='/q3-external.png'
                            img_alt='77.4% Yes, 22.6% No' button_txt='Q3: External Vulnerabilities'
                            title='Do you believe that jobs on WaterlooWorks requiring external applications
                    pose a higher privacy risk compared to those solely on WaterlooWorks?'
                        />

                        <AlertDialog
                            img_width={607}
                            img_height={260}
                            img_src='/q4-export.png'
                            img_alt='94.3% Yes, 5.7% No'
                            button_txt='Q4: Deletion Options'
                            title='Would you prefer if WaterlooWorks offered more control over your data,
                    such as the ability to choose data deletion routines or options for data export?'
                        />
                    </div>
                </div>

                <div >
                    <h2>Discrimination</h2>
                    <div className='question-dialogs'>
                        <AlertDialog
                            img_width={975}
                            img_height={404}
                            img_src='/q6-discrim-aspects.png'
                            img_alt='Race 13.2%. Gender 18.9%. Ethnicity 5.7%. Age 5.7%. Sexuality 3.8%. Disability 1.9%. Appearance 5.7%. Religion 1.9%. No, and variations of no: 77.4%'
                            button_txt='Q1: Discrimination Experience'
                            title='Have you experienced discrimination from postings on WaterlooWorks? If so, please specify the aspects:'
                        />

                        <AlertDialog
                            img_width={599}
                            img_height={251}
                            img_src='/q7-enforce-guidelines.png'
                            img_alt='43.4% Yes, 56.6% No' button_txt='Q2: Diversity guidelines'
                            title='Should WaterlooWorks enforce stricter guidelines for job postings to promote diversity and inclusion?'
                        />

                        <AlertDialog
                            img_width={975}
                            img_height={405}
                            img_src='/q9-flag-confidence.png'
                            img_alt='Scale of 1 (not confident) - 5 (very confident).
                            9.4% 1, 39.6% 2, 20.8% 3, 24.5% 4, 5.7% 5.' button_txt='Q3: Confidence in Monitoring'
                            title='How confident are you that WaterlooWorks actively monitors and flags discriminatory job postings?'
                        />

                        <AlertDialog
                            img_width={615}
                            img_height={253}
                            img_src='/q10-report-button.png'
                            img_alt='96.2% Yes, 3.8% No' button_txt='Q4: Report Button'
                            title='Do you believe there should be a "report" button for job postings on WaterlooWorks?'
                        />
                    </div>
                </div>
            </div>
        </Box >
    );
}