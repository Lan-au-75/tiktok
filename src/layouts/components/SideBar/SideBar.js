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
import SuggestedAccounts from '~/components/SuggestedAccounts';
import { handleScrollOnTop } from '~/handleEvent';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <div className={cx('divSideNav')}>
            <aside className={cx('wrapper')}>
                <Menu onClick={handleScrollOnTop}>
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
                <SuggestedAccounts label="Suggested accounts" content={'See all'}></SuggestedAccounts>
                <SuggestedAccounts label="Following accounts" content={'See more'}></SuggestedAccounts>
            </aside>
        </div>
    );
}

export default SideBar;
