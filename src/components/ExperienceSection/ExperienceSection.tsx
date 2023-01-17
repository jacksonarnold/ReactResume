import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { SectionHeader } from '../SectionHeader/SectionHeader';

export const ExperienceSection = (props: any) => {
    return (
        <Container sx={{ marginTop: '2rem' }}>
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
                    <h3 className="sectionText">Experience</h3>
                </Grid>
                <Grid xs={12}>
                    <SectionHeader
                        headerText="Software Egnineer"
                        subHeaderText="Kopis"
                        dateField="Feb 2020-Present"
                    />
                </Grid>
            </Grid>
        </Container>
    );
};
