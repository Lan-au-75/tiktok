import classNames from 'classnames/bind';

import config from '~/config';
import Menu, { MenuItem } from './Menu';
import styles from './SideBar.module.scss';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

function SideBar() {
    const handleClickOnTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={cx('divSideNav')}>
            <aside className={cx('wrapper')}>
                <Menu onClick={handleClickOnTop}>
                    <MenuItem
                        title="For You"
                        to={config.routers.home}
                        icon={<HomeIcon />}
                        activeIcon={<HomeActiveIcon />}
                    ></MenuItem>
                    <MenuItem
                        title="Following"
                        to={config.routers.following}
                        icon={<UserGroupIcon />}
                        activeIcon={<UserGroupActiveIcon />}
                    ></MenuItem>
                    <MenuItem
                        title="LIVE"
                        to={config.routers.live}
                        icon={<LiveIcon />}
                        activeIcon={<LiveActiveIcon />}
                    ></MenuItem>
                </Menu>
            </aside>
        </div>
    );
}

export default SideBar;
