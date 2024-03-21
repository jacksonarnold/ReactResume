import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Container } from '@mui/material';
import { SectionHeader } from '../SectionHeader/SectionHeader';

export const EducationSection = (props: any) => {
    return (
        <Container>
            <Grid
                container
                spacing={1}
                sx={{
                    marginInline: '2rem',
                    marginBlock: '0px',
                    textAlign: 'left',
                }}
            >
                <Grid xs={12}>
                    <SectionHeader
                        headerText="Bachelors Degree in Computer Science"
                        subHeaderText="University of South Carolina"
                        dateField="Dec 2018"
                    />
                </Grid>
            </Grid>
        </Container>
    );
};
