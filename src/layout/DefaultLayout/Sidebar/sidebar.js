import classNames from 'classnames/bind';
import styles from './Sibebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <h2 style={{ height: 2000 }}>Sidebar</h2>
        </aside>
    );
}

export default Sidebar;
