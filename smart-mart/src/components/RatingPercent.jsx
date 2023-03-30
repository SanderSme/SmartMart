function RatingPercent(reviews) {
    const ratings = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };
  
    reviews.forEach((review) => {
      const rating = Math.round(review.rating)
      ratings[rating] += 1;
    });
  
    const totalReviews = reviews.length;
    const percentages = {};
  
    for (let i = 1; i <= 5; i++) {
      percentages[i] = ((ratings[i] / totalReviews) * 100).toFixed(2);
    }
  
    return percentages;
  }

  export default RatingPercent