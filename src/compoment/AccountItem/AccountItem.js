import PropTypes from 'prop-types';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '~/compoment/Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ data, onClick }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('Wrapper')} onClick={onClick}>
            <Image className={cx('avatar')} src={data.avatar} alt="hoa" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}
AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};
export default AccountItem;
