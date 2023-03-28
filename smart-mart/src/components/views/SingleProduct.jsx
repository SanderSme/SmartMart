import { fetchSingleProduct } from "../../store/modules/productsSlice"
import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Discount from "../Discount";
import fullStar from '../../assets/fullStar.svg'
import emptyStar from '../../assets/emptyStar.svg'
import StarRating from "../StarRating";


const SingleProduct = () => {
  
    let {id} = useParams()
    const dispatch = useDispatch()
    const {singleProduct} = useSelector(state => state.products);
    useEffect(() => {
        if(id){
          dispatch(fetchSingleProduct(id))
        }
      }, [dispatch, id])
      const ratingArray = [...Array(5)]
    console.log(singleProduct);
    // function scrollToReviews() {
    //   const reviewsSection = document.getElementById("reviews");
    //   if (reviewsSection.scrollIntoView) {
    //     reviewsSection.scrollIntoView({ behavior: "smooth" });
    //     console.log(reviewsSection);
    //   } else {
    //     window.scrollTo(0, reviewsSection.offsetTop);
    //   }
    // }
    // scrollToReviews()
    return (
      <div> 
        {singleProduct && 
        <div className="max-w-6xl w-11/12 mx-auto">
          <div className="mt-12 flex flex-col md:flex-row gap-12">
            <div className="w-full h-[250px] sm:w-[500px] sm:h-[500px] flex items-center">
              <img src={singleProduct.imageUrl} alt={singleProduct.title}  className="h-full w-full object-cover rounded-lg"/>
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-xl md:text-2xl font-bold">{singleProduct.title}</h1>
                {singleProduct.discountedPrice < singleProduct.price ? <div className="flex gap-3 text-lg mt-4"><p className="text-red-500 ">-{Discount(singleProduct.discountedPrice, singleProduct.price)}%</p><p className="font-semibold">${singleProduct.discountedPrice}</p></div> : <p className="text-lg font-semibold my-4">${singleProduct.price}</p>}
                {singleProduct.discountedPrice < singleProduct.price ? <p className="text-sm italic mb-4 mt-1">Price before: ${singleProduct.price}</p> : null}
                <div className="flex gap-2 my-6">
                  {singleProduct.reviews.length ? <><StarRating rating = {singleProduct.rating}/>
                  <p className="italic underline text-[#00000080] cursor-pointer" >Based on {singleProduct.reviews.length} reviews</p></> : <p className="italic text-[#00000080]">No reviews for this product</p>}
                  
                </div>
                <p className="text-lg">{singleProduct.description}</p>
                <div className="w-full h-[2px] bg-gray-200 my-12"></div>
                <p className="font-medium text-sm text-gray-700">Categories:</p>
                <ul className="list-disc pl-12 text-gray-600">
                  {singleProduct.tags.map((tag) => (
                    <li key={tag} className="my-4">{tag}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center md:justify-start mt-4 md:mt-0">
                <button className="w-[300px] bg-[#4682B4] hover:bg-[#223A4E] rounded-lg text-white p-1 text-xs sm:text-base">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="w-full h-fit bg-white mt-12 rounded-lg p-4" id="reviews">
            <h2 className="text-xl font-semibold">Costomer reviews</h2>
            <div className="flex flex-col md:flex-row w-full">
              <div className="w-full h-44"></div>
              <div className="w-full">
                {singleProduct.reviews.length ? singleProduct.reviews.map((review) => (
                  <div key={review.id}>
                    <p className="text-lg font-medium">{review.username}</p>
                    <div className="flex gap-2 my-3">
                      {review.rating && ratingArray.map((_, index) => (
                      <img
                      key={index}
                      src={index < review.rating ? `${fullStar}` : `${emptyStar}`}
                      className="w-3 sm:w-5"
                      />
                      ))}
                    </div>
                    <p>{review.description}</p>
                    <div className="w-full h-[1px] bg-gray-200 my-4"></div>
                  </div>
                )): <p>No reviews for this product</p>}
              </div>
            </div>
          </div>
        </div>}
      </div>
  )
}

export default SingleProduct