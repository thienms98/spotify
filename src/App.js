import classNames from 'classnames/bind';
import { HomePage } from '~/pages/HomePage';
import { Sidebar } from '~/components/Sidebar';
import styles from './App.module.scss';

const cx = classNames.bind(styles);

function App() {
    return (
        <div className={cx('app')}>
            <Sidebar />
            {/* <HomePage /> */}
        </div>
    );
}

export default App;
