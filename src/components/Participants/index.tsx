import React from 'react';

interface ParticipantsProps {
    activeSubComponent?: string;
    activeFilter?: string;
}

const Participants: React.FC<ParticipantsProps> = ({ activeSubComponent = '', activeFilter = '' }) => {
    return (
        <div>
            <h1>Статистика сотрудников</h1>
            {activeSubComponent === 'dateFilter' && <p>Фильтр по дате</p>}
            {activeSubComponent === 'directionFilter' && <p>Фильтр по направлению</p>}
            {activeSubComponent === 'dateFilter' && activeFilter === 'previousMonth' && <p>Прошлый месяц по дате</p>}
            {activeSubComponent === 'dateFilter' && activeFilter === 'currentMonth' && <p>Текущий месяц по дате</p>}
            {activeSubComponent === 'dateFilter' && activeFilter === 'nextMonth' && <p>Следующий месяц по дате</p>}
            {activeSubComponent === 'dateFilter' && activeFilter === 'customPeriod' && <p>Выбрать период по дате</p>}
            {activeSubComponent === 'directionFilter' && activeFilter === 'previousMonth' && <p>Прошлый месяц по направлению</p>}
            {activeSubComponent === 'directionFilter' && activeFilter === 'currentMonth' && <p>Текущий месяц по направлению</p>}
            {activeSubComponent === 'directionFilter' && activeFilter === 'nextMonth' && <p>Следующий месяц по направлению</p>}
            {activeSubComponent === 'directionFilter' && activeFilter === 'customPeriod' && <p>Выбрать период по направлению</p>}
        </div>
    );
};

export default Participants;
