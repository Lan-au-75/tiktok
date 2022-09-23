import { forwardRef, useState, useRef } from 'react';
import classNames from 'classnames';

import styles from './Image.module.scss';
import images from '~/assets/images';

function Image({ src, alt, className, fallBack: customFallBack = images.noImage, ...props }, ref) {
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
}

export default forwardRef(Image);
