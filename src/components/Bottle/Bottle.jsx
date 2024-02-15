import PropTypes from 'prop-types';
import './Bottle.css';

const Bottle = ({bottle, handleAddToCart}) => {
    const { name, price, img } = bottle;
    return (
        <div className="bottle">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Price : ${price}</p>
            <button onClick={ () => handleAddToCart(bottle) } className='button'>Add To Cart</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle : PropTypes.array.isRequired,
    handleAddToCart : PropTypes.func.isRequired,
}

export default Bottle;