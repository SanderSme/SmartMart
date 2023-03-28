import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../../store/modules/productsSlice"
import Discount from "../Discount"
import fullStar from '../../assets/fullStar.svg'
import emptyStar from '../../assets/emptyStar.svg'
import { Link } from "react-router-dom"


const HomePage = () => {
    const dispatch = useDispatch()
    const {products} = useSelector(state => state.products)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])
    
    console.log(products);
    const ratingArray = [...Array(5)]
  return (
    <div className="max-w-6xl w-11/12 mx-auto flex flex-wrap gap-[44px] mt-12">
      {products.map((product) => (
        <div key={product.id}>
            <div className="w-[255px] h-[284px] relative">
              {product.discountedPrice < product.price ? <div className="h-[70px] w-[70px] rounded-full bg-[#B4464D] left-[-20px] top-[-20px] absolute flex items-center justify-center"><p className="text-white text-lg">-{Discount(product.discountedPrice, product.price)}%</p></div> : null}
            
              <img src={product.imageUrl} className=" w-full h-full object-cover rounded-t-lg"/>
              <div className="absolute bottom-0 w-full bg-gradient-to-b from-[#00000000] to-[#00000090] h-[100px]">
                <p className="text-white absolute bottom-1 p-2 text-xl font-medium">{product.title}</p>
              </div>
            </div>
            <div className="w-[255px] h-fit min-h-[230px] rounded-b-lg bg-[#E2F2FF] flex flex-col">
              <div className="p-2">
                <p>{product.description}</p>
                <div className="flex gap-2">
                  {product.tags.map((tag) => (
                  <p key={tag} className="text-[#00000070]">#{tag}</p>
                  ))}
                </div>
                <p className="text-lg font-medium my-1">
                  {product.discountedPrice < product.price ? <><strike className="mr-2 text-[#B4464D]">${product.price}</strike>
                    <span>${product.discountedPrice}</span></> : <span>${product.price}</span>}
                </p>
                <div className="flex gap-2 my-2">
                  {product.rating > 0 && ratingArray.map((_, index) => (
                    <img
                    key={index}
                    src={index < product.rating ? `${fullStar}` : `${emptyStar}`}
                    />
                  ))}
                </div>
                <Link to={`/product/${product.id}`}>
                <button className="w-full bg-[#4682B4] hover:bg-[#223A4E] rounded-lg text-white mt-2 p-1">View product</button>
                </Link>
              </div>
            </div>  
        </div>
            ))}
    </div>
  )
}

export default HomePage