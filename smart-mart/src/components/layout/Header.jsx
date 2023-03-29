import logo from '../../assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const {numberOfItemsInCart} = useSelector(state => state.cart)
  const linkStyles = "hover:underline hover:cursor-pointer "
  const activeLinkStyles = "underline font-semibold " + linkStyles
  return (
    <div className='h-[90px] bg-[#879DA9] leading-[90px]'>
        <div className='max-w-6xl w-11/12 mx-auto h-full align-middle flex justify-between relative'>
            <div className='hidden lg:flex gap-20'>
                <NavLink to={"/products"} className={({isActive}) => isActive ? activeLinkStyles : linkStyles}>
                  <p>All Products</p>
                </NavLink>
                <NavLink to={"/contact"} className={({isActive}) => isActive ? activeLinkStyles : linkStyles}>
                  <p>Contact</p>
                </NavLink>
                <NavLink to={"/sale"} className={({isActive}) => isActive ? activeLinkStyles : linkStyles}>
                  <p>SALE</p>
                </NavLink>
            </div>
            <NavLink to={"/"}>
            <img src={logo} className='absolute left-1/2 top-1/2 translate-y-[-50%] translate-x-[-50%]'/>
            </NavLink>
            <div className='relative'>
              <NavLink to={"/cart"}>
              <div className='absolute h-4 w-fit min-w-[16px] bottom-1/2 -right-2 rounded-full bg-white text-xs flex justify-center'>{numberOfItemsInCart}</div>
              <FontAwesomeIcon icon={faCartShopping} className='h-8 align-middle my-auto' />
              </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Header