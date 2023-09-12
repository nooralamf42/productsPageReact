import React from 'react'
import Card from './Card'
import toast, { Toaster } from "react-hot-toast"

export default function Cards({ data, category, cart, setCart}) {
    let productsData = data
    if(category!=="all"){
      productsData = productsData.filter((filteredProduct)=> filteredProduct.category === category)
    }

    function cardBtnClickHandler(currentItem){
      toast.success("item added")
    }

  return (
    <div className='flex justify-center  gap-10 flex-wrap mb-12'>


    {
        productsData.map((cardData)=>
            <Card key={cardData.id} data={cardData} setCart={setCart} cart={cart}/>
        )
    }
    <Toaster/>
    </div>
  )
}
