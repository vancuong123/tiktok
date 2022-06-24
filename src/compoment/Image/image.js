import PropTypes from 'prop-types';

import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import images from '~/acsess/img';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, className, ...props }, ref) => {
    const handleError = (err) => {
        setFallback(images.noImage);
    };
    const [fallBack, setFallback] = useState('');
    return (
        <img
            {...props}
            src={fallBack || src}
            ref={ref}
            onError={handleError}
            className={classNames(styles.wrapper, className)}
            alt="hello world"
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
};
export default Image;
