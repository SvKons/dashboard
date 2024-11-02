import React from 'react';
import Achievements from '../Achievements';
import DateFilter from '../DateFilter';
import DirectionFilter from '../DirectionFilter';
import Goals from '../Goals';
import Participants from '../Participants';
import Statistics from '../Statistics';
import './MainContent.scss';

interface MainContentProps {
    activeComponent: string;
    activeSubComponent: string;
    activeFilter: string;
}

const MainContent: React.FC<MainContentProps> = ({ activeComponent, activeSubComponent, activeFilter }) => {
    const renderContent = () => {
        switch (activeComponent) {
            case 'statistics':
                return <Statistics activeSubComponent={activeSubComponent} activeFilter={activeFilter} />;
            case 'participants':
                return <Participants activeSubComponent={activeSubComponent} activeFilter={activeFilter} />;
            case 'goals':
                return <Goals />;
            case 'achievements':
                return <Achievements />;
            case 'dateFilter':
                return <DateFilter />;
            case 'directionFilter':
                return <DirectionFilter />;
            default:
                return <Statistics />;
        }
    };

    return (
        <div className="main-page">
            <div className="content">{renderContent()}</div>
        </div>
    );
};

export default MainContent;
