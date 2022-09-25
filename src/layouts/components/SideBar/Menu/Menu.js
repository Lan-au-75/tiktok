import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './Menu.module.scss';

const cx = classnames.bind(styles);

function Menu({ children, onClick }) {
    return (
        <nav className={cx('wrapper')} onClick={onClick}>
            {children}
        </nav>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

export default Menu;
