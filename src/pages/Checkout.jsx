
import React, { captureOwnerStack, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import {useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";

const Checkout = ({setOrder}) => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('cod');

  const [shippingInfo, setShippingInfo] = useState({
    address: '',
    city: '',
    zip: ''
  })

  const cart = useSelector(state => state.cart)
  const navigate = useNavigate();

  const handleOrder =()=>{
    const newOrder = {
      products : cart.products,
      orderNumber : '12344',
      shippingInformation : shippingInfo,
      totalPrice: cart.totalPrice
    }
    setOrder(newOrder)
    navigate('/order-confirmation')
  }

  
  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>
      <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
        <div className="md:w-2/3">
          {/* Billing Information */}
          <div className="border p-2 mb-6">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setBillingToggle(!billingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Billing Information
              </h3>
              {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            
            <div className={`space-y-4 ${billingToggle ? '' : 'hidden'}`}>
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  className="w-full px-3 py-2 border"
                />
              </div>
              
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  className="w-full px-3 py-2 border"
                />
              </div>
              
              <div>
                <label className="block text-gray-700">Phone</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter Phone #"
                  className="w-full px-3 py-2 border"
                />
              </div>
            </div>
          </div>

          {/* Shipping Information */}
          <div className="border p-2 mb-6">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setShippingToggle(!shippingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Shipping Information
              </h3>
              {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`space-y-4 ${shippingToggle ? '' : 'hidden'}`}>
              <div>
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter Address"
                  className="w-full px-3 py-2 border"
                  onChange={(e)=>setShippingInfo({...shippingInfo, address: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-gray-700">City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter City"
                  className="w-full px-3 py-2 border"
                     onChange={(e)=>setShippingInfo({...shippingInfo, city: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-gray-700">Zip Code</label>
                <input
                  type="text"
                  name="zipcode"
                  placeholder="Enter Zip Code"
                  className="w-full px-3 py-2 border"
                     onChange={(e)=>setShippingInfo({...shippingInfo, zip: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="border p-2 mb-6">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setPaymentToggle(!paymentToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Payment Method
              </h3>
              {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            
            <div className={`space-y-4 ${paymentToggle ? '' : 'hidden'}`}>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'cod'}
                  onChange={() => setPaymentMethod('cod')}
                  className="mr-2"
                />
                <label className="block text-gray-700">Cash on Delivery</label>
              </div>

              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'dc'}
                  onChange={() => setPaymentMethod('dc')}
                  className="mr-2"
                />
                <label className="block text-gray-700">Debit Card</label>
              </div>

              {/* Debit Card Information */}
              {paymentMethod === "dc" && (
                <div className="bg-gray-50 p-4 rounded mt-4 space-y-4">
                  <h3 className="text-md font-semibold text-gray-800 mb-3">
                    Debit Card Information
                  </h3>
                  
                  <div>
                    <label className="block text-gray-700 mb-1">Card Number</label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-3 py-2 border rounded"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-1">Card Holder Name</label>
                    <input
                      type="text"
                      placeholder="Enter Name on Card"
                      className="w-full px-3 py-2 border rounded"
                    />
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-gray-700 mb-1">Expire Date</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-3 py-2 border rounded"
                      />
                    </div>

                    <div className="flex-1">
                      <label className="block text-gray-700 mb-1">CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-3 py-2 border rounded"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <button className="w-full bg-red-600 text-white py-2 px-4 hover:bg-red-700 rounded">
            Place Order
          </button>
        </div>





<div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <div className="space-y-4">
            {cart.products.map((product, index) => (
              <div key={index} className="flex items-center justify-between border-b pb-3">
                <div className="flex items-center space-x-3">
                  <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h4 className="text-sm font-medium">{product.name}</h4>
                    <p className="text-xs text-gray-600">${product.price} x {product.quantity}</p>
                  </div>
                </div>
                <span className="font-semibold">${(product.price * product.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
           <div className="mt-4 border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-lg">Total Price:</span>
              <span className="font-bold text-xl text-red-600">${cart.totalPrice.toFixed(2)}</span>
            </div>
           </div>
           <button className="w-full bg-red-600 text-white py-2 px-4 hover:bg-red-700 rounded mt-2"
           onClick={handleOrder}>
            Place Order
           </button>
        </div>


        



      </div>
    </div>
  );
};

export default Checkout;