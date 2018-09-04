export default{
  totalPrice(state){
    return state.cartFoods.reduce((preTotal,food)=>preTotal + food.count*food.price,0)
  },
  totalCount (state) {
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count, 0)
  },
  ratingsCount(state){
    return state.ratings.length
  },
  positiveRatingsCount(state){
    return state.ratings.reduce((preTotal,rating)=>preTotal+ (rating.rateType===0 ? 1:0),0)
  },
  negativeRatingsCount(state,getters){
    return getters.ratingsCount - getters.positiveRatingsCount
  }
}