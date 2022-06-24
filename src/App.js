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
                <MPlayer
                    url={
                        'https://p.scdn.co/mp3-preview/5a2275b50d2ea67268d5f4ef2f1e3ad4c6722bb9?cid=f6a40776580943a7bc5173125a1e8832'
                    }
                />
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
