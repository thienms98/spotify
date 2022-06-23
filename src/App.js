import classNames from 'classnames/bind';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '~/pages/HomePage';
import { Sidebar } from '~/components/Sidebar';
import styles from './App.module.scss';
import { MPlayer } from './components/MPlayer';

const cx = classNames.bind(styles);

function App() {
    return (
        <div className={cx('app')}>
            <Sidebar />
            <div className={cx('mplayer')}>
                <MPlayer />
            </div>
            <div className={cx('content')}>
                <Routes>
                    <Route path={'/'} element={<HomePage />}></Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
