var cart=[];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart(){
  return cart
}

function addToCart(item){
  var price=Math.floor(Math.random()*10000)/100
  var cartObject={[item]:price}
  cart.push(cartObject)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  if (cart.length===0){
    console.log("Your shopping cart is empty.")
  } else {
    var insideCart="In your cart, you have"
    for (var i=0; i<cart.length; i++){
      if (i>0){
        insideCart+=","
      }
      for (var item in cart[i]){
        insideCart+=` ${item} at $${cart[i][item]}`
      }
    }
    insideCart+="."
    console.log(insideCart)
  }
}

function removeFromCart(item){
  var itsNotThere=true
  for (var i=0; i<cart.length; i++){
    for (var cartItem in cart[i]){
      if (cart[i].hasOwnProperty(item)){
        cart.splice(i,1)
        itsNotThere=false
      }
    }
  }
  if (itsNotThere){
    console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(cardNumber){
  if ( cardNumber != undefined){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart=[]
  } else {
    console.log("We don't have a credit card on file for you to place your order.")
  }
}
