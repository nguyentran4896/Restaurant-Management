import React, { Component } from 'react'
import Products from 'components/header/cart/Products'
import QuickView from 'components/header/cart/QuickView'

const products = [
  {
    'id': 1,
    'name': 'Sante',
    'price': 120,
    'image': 'http://i.telegraph.co.uk/multimedia/archive/02999/restaurant_2999753b.jpg',
    'category': 'vegetables'
  },
  {
    'id': 2,
    'name': 'Bò xông khói',
    'price': 60,
    'image': 'https://media.timeout.com/images/101447733/image.jpg',
    'category': 'vegetables'
  },
  {
    'id': 3,
    'name': 'Combo hamburger',
    'price': 48,
    'image': 'https://images1.houstonpress.com/imager/u/745xauto/7635901/hou_food_150701_principalburgerbernies_phaedracook.jpg',
    'category': 'vegetables'
  },
  {
    'id': 4,
    'name': 'Combo Hawaii Seefood',
    'price': 32,
    'image': 'http://img2.10bestmedia.com/Images/Photos/343830/Hugo-s-Cellar-Las-Vegas_54_990x660.jpg',
    'category': 'vegetables'
  },
  {
    'id': 5,
    'name': 'Gà Bắc Kinh',
    'price': 56,
    'image': 'http://healthyrise.com/wp-content/uploads/2016/06/Restaurant-Food-5.jpg',
    'category': 'vegetables'
  },
  {
    'id': 6,
    'name': 'Bò Kobe',
    'price': 16,
    'image': 'http://www.londondiningreviews.com/wp-content/uploads/2013/11/cover.jpg',
    'category': 'vegetables'
  },
  {
    'id': 7,
    'name': 'Kante Úc',
    'price': 82,
    'image': 'https://www.totalhappyhour.com/preview/500-450/content/files/mod.happyhour/0237f70e9b8f4a69b82a63b4e2a9f831.jpg',
    'category': 'vegetables'
  },
  {
    'id': 8,
    'name': 'Hamburger Special',
    'price': 35,
    'image': 'https://img.huffingtonpost.com/asset/55ad372c1800002600376351.jpeg?ops=scalefit_720_noupscale',
    'category': 'vegetables'
  },
  {
    'id': 9,
    'name': 'Bánh mì kẹp + khoai tây chiên',
    'price': 60,
    'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTehBfpn1OmyLEP2ed9ZvAINJGkWSFI3vZQBxJJiqx_UhO5L11m',
    'category': 'vegetables'
  },
  {
    'id': 10,
    'name': 'Bánh mì trứng',
    'price': 75,
    'image': 'http://static1.businessinsider.com/image/597f54834528e620008b5c38-480/buffalo-wild-wings.jpg',
    'category': 'vegetables'
  },
  {
    'id': 11,
    'name': 'Spaghetti',
    'price': 22,
    'image': 'https://cbsnews1.cbsistatic.com/hub/i/r/2015/07/01/0b059f60-344d-4ada-baae-e683aff3650a/thumbnail/620x350/825bc54f859cdd47aec604b592fb3a78/istock000044051102large.jpg',
    'category': 'vegetables'
  },
  {
    'id': 12,
    'name': 'Cơm Trung Hoa + Vang Pháp',
    'price': 48,
    'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLdjW5mFCns2uaMea9zv4QIT4PdC2KBpOOC5_htC9WrKyeQTna',
    'category': 'vegetables'
  }
]

class Menu extends Component {
  constructor () {
    super()
    this.state = {
      products: [],
      cart: [],
      totalItems: 0,
      totalAmount: 0,
      term: '',
      category: '',
      cartBounce: false,
      quantity: 1,
      quickViewProduct: {},
      modalActive: false
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleMobileSearch = this.handleMobileSearch.bind(this)
    this.handleCategory = this.handleCategory.bind(this)
    this.handleAddToCart = this.handleAddToCart.bind(this)
    this.sumTotalItems = this.sumTotalItems.bind(this)
    this.sumTotalAmount = this.sumTotalAmount.bind(this)
    this.checkProduct = this.checkProduct.bind(this)
    this.updateQuantity = this.updateQuantity.bind(this)
    this.handleRemoveProduct = this.handleRemoveProduct.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  getState () {
    return this.state
  }

  // Fetch Initial Set of Products from external API
  getProducts () {
    this.setState({
      products: products
    })
  }
  componentWillMount () {
    this.getProducts()
  }

  // Search by Keyword
  handleSearch (event) {
    this.setState({ term: event.target.value })
  }
  // Mobile Search Reset
  handleMobileSearch () {
    this.setState({ term: '' })
  }
  // Filter by Category
  handleCategory (event) {
    this.setState({ category: event.target.value })
    console.log(this.state.category)
  }
  // Add to Cart
  handleAddToCart (selectedProducts) {
    let cartItem = this.state.cart
    let productID = selectedProducts.id
    let productQty = selectedProducts.quantity
    if (this.checkProduct(productID)) {
      let index = cartItem.findIndex(x => x.id === productID)
      cartItem[index].quantity = Number(cartItem[index].quantity) + Number(productQty)
      this.setState({
        cart: cartItem
      })
    } else {
      cartItem.push(selectedProducts)
    }
    this.setState({
      cart: cartItem,
      cartBounce: true
    })
    setTimeout(function () {
      this.setState({ cartBounce: false })
    }.bind(this), 1000)
    this.sumTotalItems(this.state.cart)
    this.sumTotalAmount(this.state.cart)
  }
  handleRemoveProduct (id, e) {
    let cart = this.state.cart
    let index = cart.findIndex(x => x.id === id)
    cart.splice(index, 1)
    this.setState({
      cart: cart
    })
    this.sumTotalItems(this.state.cart)
    this.sumTotalAmount(this.state.cart)
    e.preventDefault()
  }
  checkProduct (productID) {
    let cart = this.state.cart
    return cart.some(function (item) {
      return item.id === productID
    })
  }
  sumTotalItems () {
    let total = 0
    let cart = this.state.cart
    total = cart.length
    this.setState({
      totalItems: total
    })
  }
  sumTotalAmount () {
    let total = 0
    let cart = this.state.cart
    for (var i = 0; i < cart.length; i++) {
      total += cart[i].price * parseInt(cart[i].quantity)
    }
    this.setState({
      totalAmount: total
    })
  }
  // Update Quantity
  updateQuantity (qty) {
    console.log('hola!')
    this.setState({
      moq: qty
    })
  }
  // Reset Quantity
  // updateQuantity (qty) {
  //   console.log('hola!')
  //   this.setState({
  //     quantity: qty
  //   })
  // }
  // Open Modal
  openModal (product) {
    this.setState({
      quickViewProduct: product,
      modalActive: true
    })
  }
  // Close Modal
  closeModal () {
    this.setState({
      modalActive: false
    })
  }

  render () {
    return (
      <div className='container-fluid no-padding'>
        <Products
          productsList={this.state.products}
          searchTerm={this.state.term}
          addToCart={this.handleAddToCart}
          productQuantity={this.state.quantity}
          updateQuantity={this.updateQuantity}
          openModal={this.openModal}
        />
        <QuickView product={this.state.quickViewProduct} openModal={this.state.modalActive} closeModal={this.closeModal} />
      </div>
    )
  }
}

export default Menu
