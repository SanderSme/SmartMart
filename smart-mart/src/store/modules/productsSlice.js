import {createSlice} from "@reduxjs/toolkit"

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: []
    },
    reducers: {
        SET_PRODUCTS: (state, action) => {
            state.products = action.payload
        }
    }
})

export default productsSlice.reducer

const {SET_PRODUCTS} = productsSlice.actions

export const fetchProducts = () => async (dispatch) => {
    try {
        const response = await fetch('https://api.noroff.dev/api/v1/online-shop')
        const data = await response.json()
        dispatch(SET_PRODUCTS(data))
    } catch(e) {
        return console.error(e)
    }
}