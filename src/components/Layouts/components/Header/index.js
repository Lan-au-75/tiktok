import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightToBracket,
    faCircleXmark,
    faEllipsisVertical,
    faGear,
    faMagnifyingGlass,
    faPlus,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { faAppStoreIos, faTelegram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faCircleQuestion, faKeyboard, faMessage, faUser } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import HeadlessTippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faAppStoreIos} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Vietnamese',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

// const MENU_ITEM = [
//     {
//         data: [
//             {
//                 icon: <FontAwesomeIcon icon={faAppStoreIos} />,
//                 title: 'English',
//                 children: {
//                     title: 'Language',
//                     data: [
//                         {
//                             code: 'en',
//                             title: 'English',
//                         },
//                         {
//                             code: 'vi',
//                             title: 'Vietnamese',
//                         },
//                     ],
//                 },
//             },
//             {
//                 icon: <FontAwesomeIcon icon={faCircleQuestion} />,
//                 title: 'Feedback and help',
//                 to: '/feedback',
//             },
//             {
//                 icon: <FontAwesomeIcon icon={faKeyboard} />,
//                 title: 'Keyboard shortcuts',
//             },
//         ],
//     },
//     {
//         title: 'Language',
//         data: [
//             {
//                 code: 'en',
//                 title: 'English',
//             },
//             {
//                 code: 'vi',
//                 title: 'Vietnamese',
//             },
//         ],
//     },

//     {
//         title: 'Language',
//         data: [
//             {
//                 code: 'en',
//                 title: 'English 1',
//             },
//             {
//                 code: 'vi',
//                 title: 'Vietnamese 1',
//             },
//         ],
//     },
// ];

const USERMENU = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@lanau75',
    },

    {
        icon: <FontAwesomeIcon icon={faTiktok} />,
        title: 'Get coins',
        to: '/coin',
    },

    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const [searchAccount, setSearchAccount] = useState([]);

    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchAccount([]);
        }, 0);
    }, []);

    const handleMenuChange = (menuIem) => {
        switch (menuIem.type) {
            case 'Language':
                break;

            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="logo-Tiktok" style={{ cursor: 'pointer' }} />

                <HeadlessTippy
                    appendTo={document.body}
                    visible={searchAccount.length > 0}
                    interactive={true}
                    render={(attrs) => (
                        <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-label')}>Account</h4>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input type="text" placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx('header-right')}>
                    {currentUser ? (
                        <>
                            <Button leftIcon={<FontAwesomeIcon icon={faPlus} />}>Upload</Button>

                            <Tippy delay={[0, 200]} content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faTelegram}></FontAwesomeIcon>
                                </button>
                            </Tippy>

                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button leftIcon={<FontAwesomeIcon icon={faPlus} />}>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? USERMENU : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <img
                                className={cx('header-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/be22b8593ea95c8835d47f4b5309ec16~c5_100x100.jpeg?x-expires=1663657200&x-signature=PAxkoHSFK0idJXWsoQIeYV4t5vk%3D"
                                alt="Dat Villa"
                            />
                        ) : (
                            <button className={cx('header-ellipsis')}>
                                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
