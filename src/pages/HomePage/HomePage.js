import classNames from 'classnames/bind';
import { searchUI } from '~/data/searchUI';
import styles from './HomePage.module.scss';

const cx = classNames.bind(styles);

function HomePage() {
    return (
        <>
            <div className={cx('list')}>
                {searchUI.map((item, index) => {
                    return (
                        <div className={cx('list-item')} key={index}>
                            <div className={cx('item-container')}>
                                <div className={cx('bg')} style={{ '--bg': item.background }}></div>
                                <span className={cx('title')}>{item.title}</span>
                                <div className={cx('img')}>
                                    <img src={item.url} alt={item.title} loading={'lazy'} />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default HomePage;
