import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';
const cx = classNames.bind(styles);

function Button({
    to,
    href,
    onClick,
    primary,
    rounded,
    outline = false,
    disable,
    text,
    small,
    lager,
    children,
    className,
    icon,
    ...pasteProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...pasteProps,
    };
    //remove event listenner when btn is disabled
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        lager,
        text,
        disable,
        rounded,
        [className]: className,
    });
    return (
        <Comp className={classes} {...props}>
            {icon && <span className={cx('icon')}>{icon}</span>}
            <span>{children}</span>
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    disable: PropTypes.bool,
    small: PropTypes.bool,
    lager: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    icon: PropTypes.node,
    onClick: PropTypes.func,
};
export default Button;
