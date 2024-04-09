import * as React from 'react';
import Box from '@mui/material/Box';
import styles from './styling.css'
export default function Analysis() {
    return (
        <Box sx={{ width: '100%', typography: 'body2', color: 'black' }}>
            <div>
                <p className='header-text'>
                    We intend to point out interesting results, what they indicate, and possible solutions to the problems exposed in the survey.
                </p>
                <h1 className='center-align'>What does it all mean?</h1>
                <h2>Privacy</h2>
                <p>
                    The first interesting note in privacy is how much students trust the university; over 60% of respondents indicated that they trust the
                    University of Waterloo to handle their data ethically. University executives should be ecstatic about this result. other studies have
                    suggested vastly different figures for consumer trust. For example, a study done by the Harvard Business Review indicated that 97% of
                    the people surveyed expressed concern that businesses and the government might misuse their data
                    (<a href="https://hbr.org/2015/05/customer-data-designing-for-transparency-and-trust">Morey et al., 2015</a>). Another study
                    from Consumer Reports in 2020 suggested that 74% of participants were at least moderately concerned about the privacy of their data collected
                    and stored by companies (<a href='https://innovation.consumerreports.org/wp-content/uploads/2020/10/CR_PrivacyFrontAndCenter_102020_vf.pdf'>Privacy Front & Center: Meeting the Commercial Opportunity to Support Consumers Rights, 2020</a>). This is good news for
                    the University, as this indicates students generally trust them much more than an average consumer trusts companies, with respect to data privacy.
                </p>
                <p>
                    One of our follow-up questions asked whether users would like Waterloo to provide public information on how WW data is stored - over 90% of participants said yes to this.
                    These figures align with the importance of transparency that we discussed in class - people are seeking transparent, accurate information on Waterloo’s
                    usage of our data. Outside research suggests similar results, with one UK study stating that transparency is among the 3 top most important brand qualities
                    for building trust (<a href='https://www.clearchannel.co.uk/latest/clear-channel-and-jcdecaux-unveil-the-moment-for-trust-research'>The Moment for Trust Research, 2021</a>).

                </p>

                <h2>Discrimination</h2>


                <p>
                    The Ontario Human Rights at Work 2008 - Third Edition states that “Job ads and postings should not contain statements
                    , qualifications or references that relate either directly or indirectly to race, ancestry, place of origin, colour,
                    ethnic origin, citizenship, creed, sex, sexual orientation, record of offences, age, marital status, family status
                    or disability”(Human Rights at Work 2008 - Third Edition, 2008). However, our results to this point have shown that
                    nearly 20% of people feel they have been discriminated against based on gender, and over 13% feel they’ve been discriminated
                    against based on race. These significant percentages present 2 possibilities:
                    <ol>
                        <li>
                            There are many postings on WaterlooWorks that are discriminatory, by the definition in Ontario human rights code,
                            and the student who took this survey have noticed this.
                        </li>
                        <li>
                            These people have a different definition of discrimination than that which was presented in the Ontario human rights code.

                        </li>
                    </ol>

                    A mix of these two is also possible. Many would conclude that <b>1</b> indicates systemic problem and <b>2</b> is just
                    people being delusional or at the very least incorrect.

                    <b>1</b> is certainly indicative of a systemic problem; this means there are many people being discriminated
                    against on WaterlooWorks in spite of the legislation that is meant to ban such behaviour. That implies systemic
                    change is needed on Waterloo’s account - they should be more actively monitoring these postings for violations of human rights.

                    I would argue that <b>2</b> is also indicative of systemic problems; if such a large percentage of people feel discriminated against,
                    but their opinions are deemed invalid due to governmental definitions of what is/isn’t discrimination,
                    then this means there is a significant difference of opinion between the people and the government,
                    and these definitions should likely be reviewed and updated</p>
            </div>
        </Box >
    );
}