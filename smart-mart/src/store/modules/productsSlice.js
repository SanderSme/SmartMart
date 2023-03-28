import {createSlice} from "@reduxjs/toolkit"

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        singleProduct: null
    },
    reducers: {
        SET_PRODUCTS: (state, action) => {
            state.products = action.payload
        },
        SET_SINGLE_PRODUCT:(state, action) => {
            state.singleProduct = action.payload
        },
    }
})

export default productsSlice.reducer

const {SET_PRODUCTS} = productsSlice.actions
const {SET_SINGLE_PRODUCT} = productsSlice.actions

export const fetchProducts = () => async (dispatch) => {
    try {
        const response = await fetch('https://api.noroff.dev/api/v1/online-shop')
        const data = await response.json()
        dispatch(SET_PRODUCTS(data))
    } catch(e) {
        return console.error(e)
    }
}

export const fetchSingleProduct= (id) => async (dispatch) => {
    let response
    try {
        response = await fetch(`https://api.noroff.dev/api/v1/online-shop/${id}`)
        const data = await response.json()
        dispatch(SET_SINGLE_PRODUCT(data))
    } catch (e) {
        console.error(e)
    }
}