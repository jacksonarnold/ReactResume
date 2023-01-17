import './ResumeHeader.css';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

export const ResumeHeader = (props: any) => {
    return (
        <Grid
            container
            spacing={4}
            sx={{
                borderBottom: '1px solid black',
                marginInline: '1px',
                marginTop: '1rem',
            }}
        >
            <Grid xs={7} className="headerSubContainer">
                <h1 className="headerInfo">Jackson Arnold</h1>
                <h3 className="headerInfo">Software Engineer</h3>
            </Grid>
            <Grid
                xs={5}
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '1.5rem',
                }}
                className="headerSubContainer"
            >
                <h4 className="headerContactInfo">864-918-6376</h4>
                <h4 className="headerContactInfo">jacksonarnold96@gmail.com</h4>
            </Grid>
        </Grid>
    );
};
