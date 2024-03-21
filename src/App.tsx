import './App.css';
import { ResumeHeader } from './components/ResumeHeader/ResumeHeader';
import { EducationSection } from './components/EducationSection/EducationSection';
import { ExperienceSection } from './components/ExperienceSection/ExperienceSection';
import { CapgeminiBullets, KopisBullets } from './resources/resume-content';

function App() {
    return (
        <div className="App">
            <div className="ResumeContainer">
                <div className="ResumeContents">
                    <ResumeHeader />
                    <h3
                        style={{
                            textAlign: 'left',
                            marginTop: '2rem',
                            marginLeft: '4rem',
                        }}
                    >
                        Experience
                    </h3>
                    <ExperienceSection
                        bullets={KopisBullets}
                        headerText="Software Engineer"
                        subHeaderText="Kopis"
                        dateField="Feb 2020-Present"
                    />
                    <ExperienceSection
                        bullets={CapgeminiBullets}
                        headerText="Software Engineer"
                        subHeaderText="Capgemini"
                        dateField="Jan 2019-Feb 2020"
                    />
                    <h3
                        style={{
                            textAlign: 'left',
                            marginTop: '2rem',
                            marginLeft: '4rem',
                        }}
                    >
                        Education
                    </h3>
                    <EducationSection />
                </div>
            </div>
        </div>
    );
}

export default App;
