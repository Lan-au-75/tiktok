import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './SuggestedAccounts.module.scss';
import config from '~/config';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Image from '~/components/Image';
import AccountPreview from './AccountPreview';
import { handleScrollOnTop } from '~/handleEvent';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (attrs) => {
        return (
            <div tabIndex="-1" {...attrs}>
                <PopperWrapper>
                    <AccountPreview></AccountPreview>
                </PopperWrapper>
            </div>
        );
    };

    // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
    return (
        <div>
            <HeadlessTippy interactive={true} delay={[800]} offset={[-20, 4]} placement="bottom" render={renderPreview}>
                <Link to={config.routers.profile} className={cx('account-item')} onClick={handleScrollOnTop}>
                    <Image
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1664280000&x-signature=sNRI38%2F97TCxlXzvcpNrD31reNE%3D"
                        alt="theanh28entertainment"
                    />

                    <div className={cx('item-info')}>
                        <h4 className={cx('nick-name')}>
                            theanh28entertainment
                            <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                        </h4>
                        <p className={cx('full-name')}>Theanh28 Entertainment</p>
                    </div>
                </Link>
            </HeadlessTippy>
        </div>
    );
}

export default AccountItem;
