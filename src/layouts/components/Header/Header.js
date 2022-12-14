import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faEllipsisVertical, faGear, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faAppStoreIos, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faCircleQuestion, faKeyboard, faUser } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessagesIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import config from '~/config';

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
    const currentUser = true;

    const imgRef = useRef();

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
                <Link to={config.routers.home} className={cx('header-left')}>
                    <img
                        ref={imgRef}
                        src={images.logo}
                        alt="logo-Tiktok"
                        style={{ cursor: 'pointer' }}
                        draggable={false}
                    />
                </Link>

                <Search></Search>

                <div className={cx('header-right')}>
                    {currentUser ? (
                        <>
                            <Button leftIcon={<FontAwesomeIcon icon={faPlus} />}>Upload</Button>

                            <Tippy delay={[0, 200]} content="Messages" placement="bottom">
                                <a href="/messages?lang=en" className={cx('action-btn')} onDragStart={(e) => e}>
                                    <MessagesIcon></MessagesIcon>
                                </a>
                            </Tippy>

                            <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon></InboxIcon>
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
                            <Image
                                className={cx('header-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/be22b8593ea95c8835d47f4b5309ec16~c5_100x100.jpeg?x-expires=1663740000&x-signature=s4epqAg4kxAj3Hrl%2F4xHXvZ3Dck%3D"
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
