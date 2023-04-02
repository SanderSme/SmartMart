import logo from '../../assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './NavBarAnimation.css'

const linkStyles = "hover:underline hover:cursor-pointer "
  const activeLinkStyles = "underline font-semibold " + linkStyles

const Header = () => {
  function displayNavBar() {
    document.getElementById("navBar").classList.toggle("translate-x-0")
    document.getElementById("navBar").classList.toggle("-translate-x-full")
    document.getElementById("burgerBtn").classList.toggle("bg-[#E2F2FF]")
    document.querySelector('body').classList.toggle("overflow-hidden")
  }
  function hideNavBar() {
    document.getElementById("navBar").classList.toggle("translate-x-0")
    document.getElementById("navBar").classList.toggle("-translate-x-full")
    document.getElementById("burgerBtn").classList.toggle("bg-[#E2F2FF]")
    document.querySelector('body').classList.toggle("overflow-hidden")
  }
  const {numberOfItemsInCart} = useSelector(state => state.cart)
  return (
    <div className='h-[70px] md:h-[90px] bg-[#879DA9] leading-[90px]'>
      <ul className='absolute left-0 right-0 h-screen top-[70px] md:top-[90px] bg-[#879DA9] z-30 p-12 transform -translate-x-full flex flex-col gap-16' id='navBar'>
        <li className='text-lg md:text-xl font-medium'>
          <NavLink to={"/products"} className={({isActive}) => isActive ? activeLinkStyles : linkStyles} onClick={hideNavBar}>
            All Products
          </NavLink>
        </li>
        <li className='text-lg md:text-xl font-medium'>
          <NavLink to={"/contact"} className={({isActive}) => isActive ? activeLinkStyles : linkStyles} onClick={hideNavBar}>
            Contact
          </NavLink>
        </li>
        <li className='text-lg md:text-xl font-medium'>
          <NavLink to={"/sale"} className={({isActive}) => isActive ? activeLinkStyles : linkStyles} onClick={hideNavBar}>
            SALE
          </NavLink>
        </li>
      </ul>
        <div className='max-w-6xl w-11/12 mx-auto h-full items-center flex justify-between relative'>
          <button className='lg:hidden h-8 md:h-10 p-[2px] rounded flex justify-center' id='burgerBtn' onClick={displayNavBar}>
            <FontAwesomeIcon icon={faBars} className='h-full'/>
          </button>
            <div className='lg:flex gap-8 text-xs md:text-base md:gap-20 hidden'>
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
                <img src={logo} className='h-8 md:h-12 absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]'/>
              </NavLink>
        <div className='relative'>
            <NavLink to={"/cart"}>
              <div className='absolute h-4 w-fit min-w-[16px] bottom-1/2 -right-2 rounded-full bg-white text-xs flex justify-center'>{numberOfItemsInCart}</div>
              <FontAwesomeIcon icon={faCartShopping} className='h-6 md:h-8 align-middle my-auto' />
            </NavLink>
        </div>
        </div>
    </div>
  )
}

export default Header