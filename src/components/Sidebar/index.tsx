import { useState } from 'react';
import './Sidebar.scss';

interface SidebarProps {
    setActiveComponent: (component: string) => void;
    setActiveSubComponent: (subComponent: string) => void;
}

type MenuKey = 'department' | 'employees';

const Sidebar = ({ setActiveComponent, setActiveSubComponent }: SidebarProps) => {
    const [openMenus, setOpenMenus] = useState<Record<MenuKey, boolean>>({
        department: false,
        employees: false,
    });

    const handleMenuClick = (menu: MenuKey) => {
        setOpenMenus(prevState => ({
            ...prevState,
            [menu]: !prevState[menu],
        }));
    };

    // Функция для изменения URL без перезагрузки страницы
    const updateURL = (path: string) => {
        window.history.pushState(null, '', path);
    };

    return (
        <div className="sidebar">
            <ul className="sidebar__list">
                <li className="sidebar__item">
                    <button
                        className="sidebar__button"
                        onClick={() => {
                            setActiveComponent('statistics');
                            handleMenuClick('department');
                            updateURL('/statistika');
                        }}
                    >
                        Статистика отдела
                    </button>
                    {openMenus.department && (
                        <ul className="sidebar__submenu">
                            <li className="sidebar__submenu-item">
                                <button
                                    className="sidebar__button"
                                    onClick={() => {
                                        setActiveComponent('statistics');
                                        setActiveSubComponent('dateFilter');
                                        updateURL('/statistika/dateFilter');
                                    }}
                                >
                                    По дате
                                </button>
                            </li>
                            <li className="sidebar__submenu-item">
                                <button
                                    className="sidebar__button"
                                    onClick={() => {
                                        setActiveComponent('statistics');
                                        setActiveSubComponent('directionFilter');
                                        updateURL('/statistika/directionFilter');
                                    }}
                                >
                                    По направлению
                                </button>
                            </li>
                        </ul>
                    )}
                </li>
                <li className="sidebar__item">
                    <button
                        className="sidebar__button"
                        onClick={() => {
                            setActiveComponent('participants');
                            handleMenuClick('employees');
                            updateURL('/uchastniki');
                        }}
                    >
                        Статистика сотрудников
                    </button>
                    {openMenus.employees && (
                        <ul className="sidebar__submenu">
                            <li className="sidebar__submenu-item">
                                <button
                                    className="sidebar__button"
                                    onClick={() => {
                                        setActiveComponent('participants');
                                        setActiveSubComponent('dateFilter');
                                        updateURL('/uchastniki/dateFilter');
                                    }}
                                >
                                    По дате
                                </button>
                            </li>
                            <li className="sidebar__submenu-item">
                                <button
                                    className="sidebar__button"
                                    onClick={() => {
                                        setActiveComponent('participants');
                                        setActiveSubComponent('directionFilter');
                                        updateURL('/uchastniki/directionFilter');
                                    }}
                                >
                                    По направлению
                                </button>
                            </li>
                        </ul>
                    )}
                </li>
                <li className="sidebar__item">
                    <button
                        className="sidebar__button"
                        onClick={() => {
                            setActiveComponent('goals');
                            updateURL('/tseli');
                        }}
                    >
                        Цели отдела
                    </button>
                </li>
                <li className="sidebar__item">
                    <button
                        className="sidebar__button"
                        onClick={() => {
                            setActiveComponent('achievements');
                            updateURL('/dostizheniya');
                        }}
                    >
                        Достижения
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
