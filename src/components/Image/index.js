import { forwardRef, useState } from 'react';
import classNames from 'classnames';

import styles from './Image.module.scss';
import images from '~/assets/images';

function Image({ src, alt, className, fallBack: customFallBack = images.noImage, ...props }, ref) {
    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(customFallBack);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            {...props}
            ref={ref}
            src={fallBack || src}
            onError={handleError}
            alt={alt}
        />
    );
}

export default forwardRef(Image);
