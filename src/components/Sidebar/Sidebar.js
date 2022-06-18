import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import images from '~/assets/images';
import navItems from './configSidebar';

const cx = classNames.bind(styles);

function Sidebar() {
    const [active, setActive] = useState(0);

    const activeHandle = (index) => {
        setActive(index);
    };
    return (
        <div className={cx('sidebar')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt="Spotify" />
            </div>
            <div className={cx('nav')}>
                <div className={cx('nav-group')}>
                    <List
                        list={navItems.filter((item) => item.group === 1)}
                        clickHandler={activeHandle}
                        currentActive={active}
                    />
                </div>
                <div className={cx('nav-group')}>
                    <List list={navItems.filter((item) => item.group === 2)} />
                </div>
            </div>
        </div>
    );
}

function List({ list, clickHandler, currentActive = -1 }) {
    return (
        <>
            {list.map((item, index) => {
                return (
                    <div
                        className={cx('nav-item', { active: currentActive === index })}
                        key={index}
                        onClick={() => {
                            if (currentActive === -1) return;
                            clickHandler(index);
                        }}
                    >
                        <div className={cx('icon')}>
                            <img src={currentActive === index ? item.activeIcon : item.icon} alt={item.name} />
                        </div>
                        <div className={cx('name')}>{item.name}</div>
                    </div>
                );
            })}
        </>
    );
}

export default Sidebar;
