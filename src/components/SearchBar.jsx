import { useState } from "react"
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("")
    const fetchData = (value) => {
        fetch("https://api.noroff.dev/api/v1/online-shop").then((response) => response.json()).then((json) => {
            const results = json.filter((product) => {
                return value && product && product.title && product.title.toLowerCase().includes(value)
            })
            setResults(results)
        })
    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }
  return (
    <div className="bg-white w-full rounded p-1 md:p-2 mx-auto mt-2 flex items-center shadow-md">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[#191970]"/>
        <input type="text" name="search" id="search" value={input} onChange={(e) => handleChange(e.target.value)} className="w-full h-full ml-2 border-none outline-none" placeholder="Type to search..."/>
    </div>
  )
}

export default SearchBar