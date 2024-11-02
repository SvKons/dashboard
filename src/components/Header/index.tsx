import './Header.scss';

interface HeaderProps {
    setActiveComponent: (component: string) => void;
    setActiveFilter: (filter: string) => void;
}

const Header = ({ setActiveComponent, setActiveFilter }: HeaderProps) => {
    return (
        <div className="header">
            <div className="header__logo-wrap">
                <img className="header__logo" src={require('./img/logo.png')} alt="Логотип" />
            </div>
            <div className="header__filter-options">
                <div className="header__filter-list">
                    <button className="header__filter-item" onClick={() => setActiveFilter('previousMonth')}>
                        Прошлый месяц
                    </button>
                    <button className="header__filter-item" onClick={() => setActiveFilter('currentMonth')}>
                        Текущий месяц
                    </button>
                    <button className="header__filter-item" onClick={() => setActiveFilter('nextMonth')}>
                        Следующий месяц
                    </button>
                    <button className="header__filter-item" onClick={() => setActiveFilter('customPeriod')}>
                        Выбрать период
                    </button>
                </div>
            </div>
            <div className="header__buttons">
                <button className="header__button header__button_settings">
                    <img src={require('./img/settings.png')} alt="Настройки" className="header__icon" />
                </button>
                <button className="header__button header__button_login">
                    <svg className="header__icon" width="37" height="37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.583 33.917h7.709a3.083 3.083 0 0 0 3.083-3.084V6.167a3.083 3.083 0 0 0-3.083-3.084h-7.709" stroke="#000" />
                        <path d="m16.958 24.667 6.167-6.167-6.167-6.167M23.125 18.5h-18.5" stroke="#000" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Header;
