import './App.css';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { ResumeHeader } from './components/ResumeHeader/ResumeHeader';
import { EducationSection } from './components/EducationSection/EducationSection';

function App() {
    return (
        <div className="App">
            <div className="ResumeContainer">
                <ResumeHeader />
                <EducationSection />
            </div>
        </div>
    );
}

export default App;
