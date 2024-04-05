import * as React from 'react';
import Box from '@mui/material/Box';
import styles from './styling.css'
export default function Survey() {
    return (
        <Box sx={{ width: '100%', typography: 'body2', color: 'black' }}>
            <div>
                <p className='header-text'>
                    We asked students questions about their feelings regarding privacy and discrimination on WaterlooWorks, and prospect solutions to these problems.
                    The actual survey questions can be found <a href="https://docs.google.com/forms/d/e/1FAIpQLSef27Brydeo-SCkdFe9zQW59-n0slpvdpfxI20yGMPAWjSA-Q/viewform">here </a>
                </p>
                <h1 className='center-align'>Why these questions?</h1>
                <h2>Privacy</h2>

                <div className='nice-list'>
                    <ul>
                        <li><i>PIPEDA</i> - The Personal Information Protection and Electronic Documents (or PIPEDA)
                            requires organizations to be transparent about privacy practices while also being held
                            accountable for their data handling activities. Questions 1-4 were framed based on basic rights as specified under this act.</li>
                    </ul>
                    <p></p>
                </div>
                <h2>Discrimination</h2>

                <div className='nice-list'>
                    <ul>
                        <li> <i>The prevalence of discrimination</i> -  Although the workforce has become increasingly diverse—improving the integration
                            of female, migrant, and older workers, amongst other groups—many individuals belonging
                            to various minority groups still face considerable discrimination in the labour market (Lippens et al., 2023).
                            This prompted us to collect information on the sentiment of the average UWaterloo student on whether they feel/know
                            they've been discriminated against, and if they've recevied an unfair advantage/disadvantage due to reasons other
                            than their skills.</li>

                        <li><i>OHRC guidelines</i> - As per the Ontario Human Rights Commission, "Advertisements for jobs should not include neutral requirements
                            that may be discriminatory barriers and result in human rights complaints" (IV. Human Rights Issues at All
                            Stages in Employment, 2014). By exploring students' opinions on topics such as how confident they feel with
                            WW actively mitigating discriminatory job postings and whether they have had instances where they faced
                            discrimination on the platform, we can determine if action needs to be taken to make the guidelines for employers stricter,
                            ven going to the extent of flagging employers upon violations.</li>

                        <li> <i>Popularity of report buttons</i> - An article by McGill university outlines how they make use of a report button in their email service to
                            quickly cater to phishing attempts and scams, which provides a quick and simplistic security feature while
                            also making the user aware of such issues by its mere existence and eventually lowering the risk for all email
                            users (McGill University, 2023). We translated the same concept to job postings on WaterlooWorks. The current
                            process for reporting a posting or company on WW is long and arduous, and has to be initiated through direct
                            contact with a human which can serve as a discouraging factor for many students, leading to the offending party
                            not being apprehended and more students being affected. </li>

                        <li><i>University of Waterloo news</i> - In recent years, there has been a buzz around the University of Waterloo for its hiring
                            practices, specifically about jobs which are only intended for applicants who meet certain minority criterias with
                            the goal of promoting diversity. For instance, the National Post has multiple articles discussing the University
                            of Waterloo’s discrimination policies, such as this one which discusses the morality of restricting the candidates
                            for research positions here (Dawson, 2022). In light of this controversy, we wanted to see what students think
                            about discrimination on the school’s main job board.</li>

                    </ul>
                </div>
            </div>
        </Box >
    );
}