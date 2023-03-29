const Discount = (discount, orgPrice) => {
    return Math.round((1 - discount / orgPrice) * 100)
  }
  
  export default Discount