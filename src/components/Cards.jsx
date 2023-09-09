import React from 'react'
import Card from './Card'
import toast, { Toaster } from "react-hot-toast"

export default function Cards({ data, category }) {
    function toastMessege(productName){
        toast.success(`${productName} added succesfully..`)
    }
    let productsData = data
    if(category!=="all"){
      productsData = productsData.filter((filteredProduct)=> filteredProduct.category === category)
    }
  return (
    <div className='flex justify-center  gap-10 flex-wrap mb-12'>

    {
        productsData.map((cardData)=>
            <Card key={cardData.id} data={cardData} toast={toastMessege}/>
        )
    }
    <Toaster/>
    </div>
  )
}
