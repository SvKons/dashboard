import { useState } from 'react';
import Header from '../../components/Header';
import MainContent from '../../components/MainContent';
import Sidebar from '../../components/Sidebar';
import './MainPage.scss';

const MainPage = () => {
    const [activeComponent, setActiveComponent] = useState('statistics');
    const [activeSubComponent, setActiveSubComponent] = useState('');
    const [activeFilter, setActiveFilter] = useState('');

    return (
        <>
            <Header setActiveComponent={setActiveComponent} setActiveFilter={setActiveFilter} />
            <div className="main-container">
                <Sidebar setActiveComponent={setActiveComponent} setActiveSubComponent={setActiveSubComponent} />
                <MainContent activeComponent={activeComponent} activeSubComponent={activeSubComponent} activeFilter={activeFilter} />
            </div>
        </>
    );
};

export default MainPage;
