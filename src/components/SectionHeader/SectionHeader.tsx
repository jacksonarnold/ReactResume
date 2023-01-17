import './SectionHeader.css';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

interface SectionHeaderProps {
    headerText: string;
    subHeaderText: string;
    dateField: string;
}

export const SectionHeader = (props: SectionHeaderProps) => {
    return (
        <Grid container spacing={1} className="sectionHeaderContainer">
            <Grid xs={12}>
                <h4 className="sectionHeaderText">{props.headerText}</h4>
            </Grid>
            <Grid container spacing={1} xs={12}>
                <Grid xs={8} className="sectionHeaderText">
                    <span>
                        <i>{props.subHeaderText}</i>
                    </span>
                </Grid>
                <Grid xs={4} className="sectionDate">
                    <span>
                        <i>{props.dateField}</i>
                    </span>
                </Grid>
            </Grid>
        </Grid>
    );
};
