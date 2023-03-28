import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../../store/modules/productsSlice"
import Discount from "../Discount"
import fullStar from '../../assets/fullStar.svg'
import emptyStar from '../../assets/emptyStar.svg'
import { Link } from "react-router-dom"

const Sale = () => {
    const dispatch = useDispatch()
    const {products} = useSelector(state => state.products)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])
    
    console.log(products);
    const ratingArray = [...Array(5)]
  return (
    <div className="max-w-6xl w-11/12 mx-auto">
        <h1 className="text-3xl p-1 mt-12">Explore a Wide Range of Discounted Products!</h1>
      <div className="w-full h-[2px] bg-gray-200"></div>
      <div className="flex flex-col sm:flex-row flex-wrap gap-[44px] mt-12 justify-center">
      {products.map((product) => (
          <>
          {product.discountedPrice < product.price ? <div key={product.id} className="flex sm:flex-col">
          <div className="w-[170px] sm:w-[255px] h-[180px] sm:h-[284px] relative">
            <div className="h-[50px] w-[50px] sm:h-[70px] sm:w-[70px] rounded-full bg-[#B4464D] left-[-10px] sm:left-[-20px] top-[-20px] absolute flex items-center justify-center"><p className="text-white text-sm sm:text-lg">-{Discount(product.discountedPrice, product.price)}%</p></div>
          
            <img src={product.imageUrl} className=" w-full h-full object-cover rounded-l-lg sm:rounded-t-lg"/>
            <div className="absolute bottom-0 w-full bg-gradient-to-b from-[#00000000] to-[#00000090] h-[100px] rounded-l-lg sm:rounded-l-none">
              <p className="text-white absolute bottom-1 p-2 text-xl font-medium">{product.title}</p>
            </div>
          </div>
          <div className="w-[170px] sm:w-[255px] h-fit min-h-[180px] sm:min-h-[230px] rounded-r-lg sm:rounded-b-lg bg-[#E2F2FF] flex flex-col">
            <div className="p-2">
              <p className="text-xs sm:text-base">{product.description}</p>
              <div className="flex gap-2">
                {product.tags.map((tag) => (
                <p key={tag} className="text-[#00000070] text-xs sm:text-base">#{tag}</p>
                ))}
              </div>
              <p className="text-sm sm:text-lg font-medium my-1">
                <strike className="mr-2 text-[#B4464D]">${product.price}</strike>
                  <span>${product.discountedPrice}</span>
              </p>
              <div className="flex gap-2 my-2">
                {product.rating > 0 && ratingArray.map((_, index) => (
                  <img
                  key={index}
                  src={index < product.rating ? `${fullStar}` : `${emptyStar}`}
                  className="w-4 sm:w-6"
                  />
                ))}
              </div>
              <Link to={`/product/${product.id}`}>
              <button className="w-full bg-[#4682B4] hover:bg-[#223A4E] rounded-lg text-white mt-2 p-1 text-xs sm:text-base">View product</button>
              </Link>
            </div>
          </div>  
      </div> : null}</>
        
            ))}
        </div>
    </div>
  )
}

export default Sale