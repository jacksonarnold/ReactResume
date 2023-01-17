import './App.css';
import { ResumeHeader } from './components/ResumeHeader/ResumeHeader';
import { EducationSection } from './components/EducationSection/EducationSection';
import { ExperienceSection } from './components/ExperienceSection/ExperienceSection';

function App() {
    let bullets: string[] = [
        'Served as architect and development lead building customer-facing products across web, Android, and iOS with Azure- hosted infrastructure.',
        'Implemented full-stack features across 7 separate applications with various stacks consisting of .NET, React, React-Native, native iOS and Android SDKs, SQL Server, and Azure cloud infrastructure.',
        'Coordinated production launches of 14 separate Android, iOS, cloud, and web applications.',
        'Collaborated with project managers and development team to create project estimates for potential and existing clients.',
        'Met regularly with clients and project stakeholders to define requirements and architect full-stack solutions.',
    ];

    return (
        <div className="App">
            <div className="ResumeContainer">
                <div className="ResumeContents">
                    <ResumeHeader />
                    <EducationSection />
                    <ExperienceSection
                        bullets={[]}
                        headerText="Bachelors Degree in Computer Science"
                        subHeaderText="University of South Carolina"
                        dateField="Dec 2018"
                    />
                    <ExperienceSection
                        bullets={bullets}
                        headerText="Software Egnineer"
                        subHeaderText="Kopis"
                        dateField="Feb 2020-Present"
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
