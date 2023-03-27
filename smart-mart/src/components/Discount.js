const Discount = (discount, orgPrice) => {
    return Math.round((1 - discount / orgPrice) * 100).toString()
  }
  
  export default Discount