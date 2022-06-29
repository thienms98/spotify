import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './MPlayer.module.scss';

const cx = classNames.bind(styles);

const timeForm = (time) => {
    let hour = Math.floor(time / 3600);
    let min = Math.floor((time % 3600) / 60);
    let sec = time % 60;
    if (min < 10) min = `0${min}`;
    if (sec < 10) sec = `0${sec}`;
    if (hour <= 0) return `${min}:${sec}`;
    else if (hour < 10) hour = `0${hour}`;
    return `${hour}:${min}:${sec}`;
};

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
    const [volume, setVolume] = useState(100);
    const rangeRef = useRef();

    useEffect(() => {
        const update = setTimeout(() => {
            setTime(audio.currentTime);
        }, 600);
        rangeRef.value = Math.ceil(time);

        return () => clearTimeout(update);
    }, [time, playing]);

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
                <div className={cx('buttons')}>
                    <button onClick={toggle}>{playing ? 'Pause' : 'Play'}</button>
                </div>
                <div className={cx('timer')}>
                    <span>{timeForm(Math.round(time))}</span>
                    <input
                        ref={rangeRef}
                        type={'range'}
                        value={time}
                        step={1}
                        min={0}
                        max={Math.round(audio.duration)}
                        onChange={seek}
                    />
                    <span>{isNaN(audio.duration) ? '00:00' : timeForm(Math.round(audio.duration))}</span>
                </div>
            </div>
            <div className={cx('volume')}>
                <input
                    type={'range'}
                    min={0}
                    max={100}
                    step={1}
                    value={volume}
                    onChange={(e) => {
                        let val = e.target.value;
                        setVolume(val);
                        audio.volume = val / 100;
                    }}
                />
            </div>
        </div>
    );
}

export default MPlayer;
