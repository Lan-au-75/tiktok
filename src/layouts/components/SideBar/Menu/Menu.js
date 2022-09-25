import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './Menu.module.scss';

const cx = classnames.bind(styles);

function Menu({ children }) {
    return <nav className={cx('wrapper')}>{children}</nav>;
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Menu;
