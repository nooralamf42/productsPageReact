import React from 'react'
import Card from './Card'

export default function Cards({ data, category, cart, setCart, toastMessage}) {
    let productsData = data
    
    if(category!=="all"){
      productsData = productsData.filter((filteredProduct)=> filteredProduct.category === category)
    }

    
  return (
    <div className='flex justify-center  gap-10 flex-wrap mb-12'>
    {
        productsData.map((cardData)=>
            <Card key={cardData.id} data={cardData} setCart={setCart} cart={cart} toastMessage={toastMessage}/> 
        )
    }
    </div>
  )
}
