import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import classNames from 'classnames';

import styles from './Image.module.scss';
import images from '~/assets/images';

const Image = forwardRef(({ src, alt, className, fallBack: customFallBack = images.noImage, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(customFallBack);
    };

    const handleDragStart = (e) => {
        e.preventDefault();
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            {...props}
            ref={ref}
            src={fallBack || src}
            alt={alt}
            onError={handleError}
            onDragStart={handleDragStart}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallBack: PropTypes.string,
};

export default Image;
