import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './AccountItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem({ data, onClick }) {
    return (
        <Link to={`/@${data.nickname} `} className={cx('wrapper')} onClick={onClick}>
            <Image src={data.avatar} alt={data.full_name} className={cx('avatar')} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>}
                </h4>

                <p className={cx('description')}>{data.nickname}</p>
            </div>
        </Link>
    );
}

export default AccountItem;
