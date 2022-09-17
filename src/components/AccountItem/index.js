import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/be22b8593ea95c8835d47f4b5309ec16~c5_300x300.webp?x-expires=1663318800&x-signature=dHR52Dq2cSzKOyYhO3iP9sZOYZE%3D"
                alt=""
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>datvilla94</span>
                    <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                </h4>

                <p className={cx('description')}>🔥Đạt Villa🔥</p>
            </div>
        </div>
    );
}

export default AccountItem;
