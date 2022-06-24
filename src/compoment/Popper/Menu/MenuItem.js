import PropTypes from 'prop-types';
import Button from '~/compoment/Button';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classNames = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button className={classNames} icon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};
export default MenuItem;
