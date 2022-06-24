import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './MPlayer.module.scss';

const cx = classNames.bind(styles);

const useAudio = (url) => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [playing]);

    useEffect(() => {
        audio.addEventListener('ended', () => {
            setPlaying(false);
            audio.currentTime = 0;
        });
        return () => {
            audio.removeEventListener('ended', () => {
                setPlaying(false);
                audio.currentTime = 0;
            });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [playing, audio, toggle];
};

function MPlayer({ url }) {
    const [playing, audio, toggle] = useAudio(url);
    const [time, setTime] = useState(audio.currentTime);
    const rangeRef = useRef();

    useEffect(() => {
        const update = setTimeout(() => {
            setTime(audio.currentTime);
        }, 1000);
        rangeRef.value = Math.ceil(time);

        return () => clearTimeout(update);
    }, [time]);

    const seek = (e) => {
        const val = e.target.value;
        setTime(val);
        audio.currentTime = val;
    };

    return (
        <div className={cx('container')}>
            <div className={cx('info')}>
                <div className={cx('image')}>
                    <img src="" alt="thumbnail" />
                </div>
                <div className={cx('text')}>
                    <div className={cx('name')}>Song's name</div>
                    <div className={cx('artists')}>Artist1, Artist 2</div>
                </div>
            </div>
            <div className={cx('control')}>
                <button onClick={toggle}>{playing ? 'Pause' : 'Play'}</button>
                <input ref={rangeRef} type="range" value={time} step={1} min={0} max={audio.duration} onChange={seek} />
            </div>
            <div className={cx('volume')}></div>
        </div>
    );
}

export default MPlayer;
