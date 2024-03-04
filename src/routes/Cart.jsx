import Header from '../components/Header'
import PropTypes from 'prop-types';

function Cart({ cart }) {
    return (
        <div className="flex flex-col min-h-svh justify-between bg-black bg-opacity-50">
            <Header />
            <div className='bg-neutral-300 text-black text-center font-semibold fade-in'>Dont Miss Our 50% Sale!</div>
            <div className="text-5xl bg-black bg-opacity-50 border-t flex flex-auto justify-left items-center text-left px-16">
                {cart.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </div>
        </div>
    )
}

Cart.propTypes = {
    cart: PropTypes.array,
    setCart: PropTypes.func
}

export default Cart