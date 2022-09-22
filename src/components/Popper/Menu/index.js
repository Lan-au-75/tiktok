import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { useState } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ children, items = [], onChange = () => {} }) {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1];

    const renderItems = () => {
        return current?.data.map((item, i) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={i}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                ></MenuItem>
            );
        });
    };

    return (
        <div>
            <HeadlessTippy
                interactive={true}
                hideOnClick={false}
                delay={[null, 600]}
                offset={[12, 12]}
                placement="top-end"
                render={(attrs) => (
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-popper')}>
                            {history.length > 1 && (
                                <Header
                                    title={current?.title}
                                    onBack={() => {
                                        setHistory((prev) => {
                                            let newState;
                                            newState = [...prev];
                                            newState.splice(-1, 1);

                                            return newState;
                                        });
                                    }}
                                ></Header>
                            )}
                            <div className={cx('menu-body')}>{renderItems()}</div>
                        </PopperWrapper>
                    </div>
                )}
                onHide={() => setHistory((prev) => prev.slice(0, 1))}
            >
                {children}
            </HeadlessTippy>
        </div>
    );
}

export default Menu;
