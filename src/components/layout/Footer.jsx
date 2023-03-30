import footerLogo from '../../assets/footerLogo.png'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  const linkStyles = "hover:underline hover:cursor-pointer "
  const activeLinkStyles = "underline font-semibold " + linkStyles
  return (
    <div className='w-full h-fit bg-[#879DA9] mt-8 py-16'>
      <div className='max-w-6xl w-11/12 mx-auto h-full flex justify-around lg:justify-between'>
        <NavLink to={"/"}>
        <img src={footerLogo} alt="" className='h-24 md:h-36 my-auto'/>
        </NavLink>
        <div className='flex flex-col justify-between h-24 md:h-36 my-auto'>
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
      </div>
    </div>
  )
}

export default Footer