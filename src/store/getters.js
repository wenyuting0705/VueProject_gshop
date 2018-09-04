export default{
  totalPrice(state){
    return state.cartFoods.reduce((preTotal,food)=>preTotal + food.count*food.price,0)
  },
  totalCount (state) {
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count, 0)
  },
}