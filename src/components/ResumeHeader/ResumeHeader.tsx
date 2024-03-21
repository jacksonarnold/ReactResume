import Grid from '@mui/material/Unstable_Grid2/Grid2';

export const ResumeHeader = (props: any) => {
    return (
        <Grid
            container
            sx={{
                borderBottom: '1px solid black',
                marginInline: '4rem',
                marginTop: '1rem',
            }}
        >
            <Grid xs={7} sx={{ textAlign: 'left' }}>
                <h1>Jackson Arnold</h1>
                <h3>Software Engineer</h3>
            </Grid>
            <Grid
                xs={5}
                sx={{
                    textAlign: 'left',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '1.5rem',
                }}
            >
                <h4 style={{ textAlign: 'right' }}>864-918-6376</h4>
                <h4 style={{ textAlign: 'right' }}>
                    jacksonarnold96@gmail.com
                </h4>
            </Grid>
        </Grid>
    );
};
