import logo from '../../assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='h-[90px] bg-[#879DA9] leading-[90px]'>
        <div className='max-w-6xl w-11/12 mx-auto h-full align-middle flex justify-between relative'>
            <div className='hidden lg:flex gap-20'>
              <NavLink to={"/products"}>
                <p className=' hover:underline hover:cursor-pointer'>All Products</p>
                </NavLink>
                <p className=' hover:underline hover:cursor-pointer'>Contact</p>
                <NavLink to={"/sale"}>
                <p className=' hover:underline hover:cursor-pointer'>SALE</p>
                </NavLink>
            </div>
            <NavLink to={"/"}>
            <img src={logo} className='absolute left-1/2 top-1/2 translate-y-[-50%] translate-x-[-50%]'/>
            </NavLink>
            <div className='relative'>
            <div className='absolute h-4 w-4 bottom-1/2 -right-2 rounded-full bg-white text-xs flex justify-center'>0</div>
            <FontAwesomeIcon icon={faCartShopping} className='h-8 align-middle my-auto' />
            </div>
        </div>
    </div>
  )
}

export default Header