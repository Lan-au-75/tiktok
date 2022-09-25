import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';
import config from '~/config';

const cx = classNames.bind(styles);

function AccountItem({ onClick }) {
    return (
        <Link to={config.routers.profile} className={cx('account-item')} onClick={onClick}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1664280000&x-signature=sNRI38%2F97TCxlXzvcpNrD31reNE%3D"
                alt=""
            />

            <div className={cx('item-info')}>
                <h4 className={cx('nick-name')}>
                    theanh28entertainment
                    <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <p className={cx('full-name')}>Theanh28 Entertainment</p>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    onClick: PropTypes.func,
};

export default AccountItem;
