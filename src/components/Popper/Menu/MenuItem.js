import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const className = cx('menu-item', {
        separate: data.separate,
    });

    return (
        <Button className={className} leftIcon={data.icon} to={data.to} onClick={onClick}>
            <span>{data.title}</span>
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
