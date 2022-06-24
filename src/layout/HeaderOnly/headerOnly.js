import PropTypes from 'prop-types';
import Header from '~/layout/components/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="container">{children}</div>
        </div>
    );
}

HeaderOnly.propTypes = {
    children: PropTypes.node.isRequired,
};
export default HeaderOnly;
