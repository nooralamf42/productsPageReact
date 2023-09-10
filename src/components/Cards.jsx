import React from 'react'
import Card from './Card'
import toast, { Toaster } from "react-hot-toast"

export default function Cards({ data, category, cart, setCart}) {
    function toastMessege(productName){
        
        if (cart.includes(productName)){
          cart.pop(productName)
          toast.error(`${productName} removed !`)
        }
        else{
          cart.push(productName)
          toast.success(`${productName} added succesfully`);
        }
        setCart(cart)
        console.log(cart)
    }
    let productsData = data
    if(category!=="all"){
      productsData = productsData.filter((filteredProduct)=> filteredProduct.category === category)
    }
  return (
    <div className='flex justify-center  gap-10 flex-wrap mb-12'>

    {
        productsData.map((cardData)=>
            <Card key={cardData.id} data={cardData} toast={toastMessege} cart={cart}/>
        )
    }
    <Toaster/>
    </div>
  )
}
