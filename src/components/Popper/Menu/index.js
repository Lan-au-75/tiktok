import classNames from 'classnames/bind';

import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderItems = (items) => {
        return items.map((item, i) => <MenuItem key={i} data={item}></MenuItem>);
    };

    return (
        <Tippy
            appendTo={document.body}
            interactive={true}
            delay={[null, 700]}
            placement="top-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>{renderItems(items)}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
