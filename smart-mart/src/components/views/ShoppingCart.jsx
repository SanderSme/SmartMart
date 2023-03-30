import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItemFromCart } from '../../store/modules/cartSlice'

const ShoppingCart = () => {
    const {itemsInCart} = useSelector(state => state.cart)
    const dispatch = useDispatch()
    let totalPrice = 0
    itemsInCart.forEach(item => {
        if(item.discountedPrice < item.price) {
            totalPrice += item.discountedPrice
        } else {
            totalPrice += item.price
        }
    })
  return (
    <div className="max-w-3xl w-11/12 mx-auto">
        <h1 className="text-xl sm:text-3xl p-1 mt-12">Shopping Cart</h1>
        <div className="w-full h-[2px] bg-gray-200"></div>
        <ul>
            {itemsInCart.length ? itemsInCart.map((product) => (
                <span key={product.id}>
                <li className="flex w-full justify-between mt-12">
                    <div className="flex gap-3 sm:gap-6">
                        <div className="w-[100px] h-[100px] sm:w-[190px] sm:h-[190px]">
                            <img src={product.imageUrl} alt={product.title} className='w-full h-full object-cover rounded-lg' />
                        </div>
                        <div>
                            <h2 className="text-sm sm:text-xl font-medium">{product.title}</h2>
                            <ul className="p-4 list-disc text-xs sm:text-sm leading-7 text-gray-600">
                                {product.tags && product.tags.map((tag) => (
                                    <li key={tag}>{tag}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div>
                            {product.discountedPrice < product.price ? <><p><strike className="text-red-500">${product.price}</strike></p>
                            <p className="text-xl">{product.discountedPrice}</p></> : <p className="text-xl">${product.price}</p>}
                        
                        </div>
                        <button type='button' onClick={() => dispatch(removeItemFromCart(product.id))} className="text-sm underline">Remove</button>
                    </div>
                </li>
            <div className="w-full h-[1px] bg-gray-200 mt-8 sm:mt-12"></div>
            </span>
            )) : <p className='text-center mt-8 text-xl'>No products in cart</p>}
        </ul>
        <div className="flex justify-between text-xl align-middle mt-6">
            <p>Subtotal:</p>
            <p className="font-medium">${Math.round(totalPrice * 100) /100}</p>
        </div>
        {itemsInCart.length ? <button className="w-full bg-[#4682B4] hover:bg-[#223A4E] rounded-lg text-white mt-4 p-1 text-xs sm:text-base">Checkout</button> : null}
        <Link to={"/products"}>
            <button className="w-full bg-[#BCD6EC] hover:bg-[#6C95B7] rounded-lg text-black hover:text-white mt-4 p-1 text-xs sm:text-base">Continue shopping</button>
        </Link>
    </div>
  )
}

export default ShoppingCart