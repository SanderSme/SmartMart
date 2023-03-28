import { fetchSingleProduct } from "../../store/modules/productsSlice"
import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Discount from "../Discount";

const SingleProduct = () => {
    let {id} = useParams()
    const dispatch = useDispatch()
    const {singleProduct} = useSelector(state => state.products);
    useEffect(() => {
        if(id){
          dispatch(fetchSingleProduct(id))
        }
      }, [dispatch, id])
    console.log(singleProduct);
  return (
    <div> {singleProduct && <div className="max-w-6xl w-11/12 mx-auto">
    <div className="mt-12 flex gap-12">
        <div className="w-[500px] h-[500px]">
            <img src={singleProduct.imageUrl} alt={singleProduct.title}  className="h-full w-full object-cover rounded-lg"/>
        </div>
        <div>
            <h1 className="text-2xl font-bold">{singleProduct.title}</h1>
            {singleProduct.discountedPrice < singleProduct.price ? <p className="text-red-500 text-lg">-{Discount(singleProduct.discountedPrice, singleProduct.price)}%</p> : null}
            <p className="text-lg">{singleProduct.description}</p>
        </div>
    </div>
</div>}
    </div>
  )
}

export default SingleProduct