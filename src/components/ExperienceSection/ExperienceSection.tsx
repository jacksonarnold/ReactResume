import { Container, List, ListItem } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { SectionHeader } from '../SectionHeader/SectionHeader';

interface ExperienceSectionProps {
    headerText: string;
    subHeaderText: string;
    dateField: string;
    bullets: string[];
}

export const ExperienceSection = (props: ExperienceSectionProps) => {
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
                        headerText={props.headerText}
                        subHeaderText={props.subHeaderText}
                        dateField={props.dateField}
                    />
                </Grid>
                <Grid xs={12}>
                    <List sx={{ listStyleType: 'disc', pl: 4 }}>
                        {props.bullets.map((item, index) => {
                            return (
                                <ListItem
                                    sx={{ display: 'list-item' }}
                                    key={index}
                                >
                                    <span>{item}</span>
                                </ListItem>
                            );
                        })}
                    </List>
                </Grid>
            </Grid>
        </Container>
    );
};
