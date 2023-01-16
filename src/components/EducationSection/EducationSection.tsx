import './EducationSection.css';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Container } from '@mui/material';

export const EducationSection = (props: any) => {
    return (
        <Container sx={{ marginTop: '2rem' }}>
            <Grid
                container
                spacing={1}
                sx={{
                    marginInline: '2rem',
                    marginBlock: '0px',
                    textAlign: 'left',
                    borderBottom: '1px solid black',
                }}
            >
                <Grid xs={12}>
                    <h3 className="sectionText">Education</h3>
                </Grid>
                <Grid xs={12}>
                    <h4 className="sectionText">
                        Bachelor's Degree in Computer Science
                    </h4>
                </Grid>
                <Grid container spacing={1} xs={12}>
                    <Grid
                        xs={10}
                        className="sectionText"
                        style={{ paddingTop: '0px' }}
                    >
                        <span>
                            <i>University of South Carolina</i>
                        </span>
                    </Grid>
                    <Grid
                        xs={2}
                        className="sectionText"
                        style={{ paddingTop: '0px', textAlign: 'right' }}
                    >
                        <span>
                            <i>Dec 2018</i>
                        </span>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};
