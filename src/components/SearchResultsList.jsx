
import { NavLink } from "react-router-dom"
const SearchResults = ({results}) => {
  return (
    <div className="w-full bg-white flex flex-col shadow-md rounded max-h-[300px] overflow-y-scroll absolute top-12 z-20 px-3 gap-2">
       {results.map((product, id) => {
           return <div key={id} className="hover:underline"><NavLink to={`/product/${product.id}`}>{product.title}</NavLink></div>
       })}
    </div>
  )
}

export default SearchResults