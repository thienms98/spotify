import { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './SearchBar.module.scss';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function SearchBar() {
    const [input, setInput] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();
    console.dir('params: ' + JSON.stringify(params, null, 4));
    console.log('location: ' + location.pathname);

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate(`/search/${input}`, { replace: true });
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [input]);

    return (
        <div className={cx('search-bar')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="text" value={input} onChange={handleInput} />
        </div>
    );
}

export default SearchBar;
