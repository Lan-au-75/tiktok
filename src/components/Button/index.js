import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    disable = false,
    rounded = false,
    className,
    children,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Component = 'button';

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        disable,
        rounded,
    });

    const props = { onClick, ...passProps };

    // Remove events listeners when button is disabled
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        Component = Link;
        props.to = to;
    }
    if (href) {
        Component = 'a';
        props.href = href;
    }

    return (
        <Component className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}> {leftIcon} </span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}> {rightIcon} </span>}
        </Component>
    );
}

export default Button;
