import classNames from 'classnames/bind';
import config from '~/config';
import styles from './Sibebar.module.scss';
import Menu, { MenuItem } from './Menu';
import {
    HomeIconActive,
    HomeIcon,
    UserGroupIconActive,
    UserGroupIcon,
    LiveIcon,
    LiveIconActive,
} from '~/compoment/Icons';
const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeIconActive />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupIconActive />}
                />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveIconActive />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
