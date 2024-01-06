class Cart {

    addToCart(item) {
        const cartJson = localStorage.getItem("cart")
        if (cartJson) {
            const cart = JSON.parse(cartJson)
            const tempItem = cart.find(el => el.product_id == item.product_id)
            if (tempItem) {
                console.log("Item already in cart")
                return
            }
            const newCart = [...cart, item]
            const newCartJson = JSON.stringify(newCart)
            localStorage.setItem("cart", newCartJson)
            console.log("Item was added to the cart")
        } else {
            const newCart = [item,]
            const newCartJson = JSON.stringify(newCart)
            localStorage.setItem("cart", newCartJson)
            console.log("Item was added to cart")
        }
    }

    getAllProducts() {
        const cartJson = localStorage.getItem("cart")
        if (!cartJson) {
            console.log("Cart doesn't exist")
            return
        }
        return JSON.parse(cartJson)
    }

    removeFromCart(item_id) {
        console.log("Removing item with id:", item_id);
        const cart = this.getAllProducts();
        if (!cart) {
            console.log("Cart doesn't exist");
        }
        const newCart = cart.filter(el => el.product_id !== item_id);
        localStorage.setItem("cart", JSON.stringify(newCart));
    }
    

    incrementQuantity(item_id) {
        const cartJson = localStorage.getItem("cart");
        if (!cartJson) {
          console.log("Cart doesn't exist");
          return;
        }
    
        const cart = JSON.parse(cartJson);
        const updatedCart = cart.map((item) =>
          item.product_id === item_id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
        const updatedCartJson = JSON.stringify(updatedCart);
        localStorage.setItem("cart", updatedCartJson);
        console.log("Quantity incremented for item with id", item_id);
      }
    
      decrementQuantity(item_id) {
        const cartJson = localStorage.getItem("cart");
        if (!cartJson) {
          console.log("Cart doesn't exist");
          return;
        }
    
        const cart = JSON.parse(cartJson);
        const updatedCart = cart.map((item) =>
          item.product_id === item_id
            ? { ...item, quantity: Math.max((item.quantity || 1) - 1, 0) }
            : item
        );
        const updatedCartJson = JSON.stringify(updatedCart);
        localStorage.setItem("cart", updatedCartJson);
        console.log("Quantity decremented for item with id", item_id);
      }
    }
    


const cartAdapter = new Cart()

export default cartAdapter