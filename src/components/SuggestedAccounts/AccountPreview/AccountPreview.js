import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';
import config from '~/config';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <a href={config.routers.profile} target="_blank" rel="noreferrer">
                    <Image
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1664280000&x-signature=sNRI38%2F97TCxlXzvcpNrD31reNE%3D"
                        alt="theanh28entertainment"
                    />
                </a>
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <a href={config.routers.profile} target="_blank" rel="noreferrer">
                    <span className={cx('nick-name')}>
                        theanh28entertainment
                        <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                    </span>
                    <p className={cx('full-name')}>Theanh28 Entertainment</p>
                </a>
                <p className={cx('analytics')}>
                    <strong>7.3M</strong>
                    <span>Followers</span>
                    <strong>469.3M</strong>
                    <span>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
