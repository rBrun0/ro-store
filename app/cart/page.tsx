'use client'

import Link from "next/link";
import { useEffect } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { CartProductCard } from "./components/cartProductCard";


export default function Cart() {

    
    const cartProductList = useSelector((state: RootState) => state.cartProducts.productList)
    const cartPrices = cartProductList.reduce((sum, item) => sum + item.price, 0)
    const cartQuantity = cartProductList.reduce((sum, item) => sum + item.quantity, 0)
    const cartTotalValue = cartPrices * cartQuantity

    useEffect(() => {
    console.log(cartProductList)
    }, [])

    return (
        <>
        {
            cartProductList.length > 0 && <div className="w-full min-h-screen pt-8 px-28 flex flex-wrap justify-around items-start gap-2">

            {
                cartProductList.length > 0 && 
                    cartProductList.map((product) => (
                        <CartProductCard key={product.id} id={product.id} productName={product.name} productImage={product.image} 
                        productPrice={product.price} productQuantity={product.quantity}/>
                    ))
                
            }

            <div className="w-96 h-96 flex flex-col justify-center items-center shadow-md space-y-5">
                    
                            <h1 className="font-semibold">valor total: </h1>
                            <h1>R$ {cartTotalValue.toFixed(2)}</h1>
            </div>
    
            </div> 

            
        }

       

        {/* empty cart element */}

        {
            cartProductList.length === 0 && <div className="w-full h-screen flex flex-col justify-center items-center space-y-3">
            <h1 className="text-2xl">Seu carrinho esta vazio, que tal enche lo ?</h1>
            <Link href={'/'}>
            <button className="flex justify-center items-center space-x-2 bg-black text-white border-2 border-transparent font-semibold px-6 py-2
                 rounded-lg cursor-pointer hover:bg-white hover:text-black hover:border-black transition-colors">
                    <FiShoppingBag/>

                    <span>loja</span>
            </button>
            </Link>
        </div> 
        }
        </>
    )
}