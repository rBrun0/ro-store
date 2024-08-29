'use client'

import { useEffect, useState } from "react"
import { ProductsType } from "../@types/types"
import { ProductCard } from "./ProductCard"
import { useSelector } from "react-redux"
import { RootState } from "../store/store"


export const MainProducts = () => {

    const [productList, setProductList] = useState<ProductsType[]>([])

    const searchValue = useSelector((state: RootState) => state.searchSlice.sValue)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then((json) => {
            console.log(json)
            setProductList(json)
        })
           
    }, [])

    return (
        <main className="w-full min-h-screen pt-8 px-28 flex flex-wrap justify-around items-start gap-2">
            {searchValue &&  productList.filter((d) => d.title.toLowerCase().includes(searchValue)).map((product) => (
                <ProductCard key={product.id} id={product.id} productName={product.title} productImage={product.image}
                 productCategory={product.category} productPrice={product.price} productDescription={product.description}/>
            ))
            }

            {
                !searchValue && productList.map((product) => (
                    <ProductCard key={product.id} id={product.id} productName={product.title} productImage={product.image}
                     productCategory={product.category} productPrice={product.price} productDescription={product.description}/>
                ))
            }
        </main>
    )
}