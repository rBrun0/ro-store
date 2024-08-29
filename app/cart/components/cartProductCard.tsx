import { addProduct, decreaseProduct } from "@/app/features/cartProducts/cartProductsSlice"
import { RootState } from "@/app/store/store"
import Image from "next/image"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

type ProductInCart = {
    productName: string,
    productPrice: number,
    productImage: string,
    productQuantity: number,
    id: number
}

export const CartProductCard = ({id,productName, productPrice, productImage, productQuantity}: ProductInCart) => {

   

    const dispatch = useDispatch()


    return (

            <div className="w-96 h-96 flex flex-col justify-center items-center shadow-md space-y-5">
            <div className="relative w-32 h-32">
                <Image src={productImage} fill objectFit="contain" sizes="(max-width: 768px) 100vw, 33vw" alt="imagem-produto"/>
            </div>

                <h1 className="font-semibold">{productName}</h1>
                <h1>R$ {productPrice}</h1>

                <span className="pt-3">{productQuantity}</span>

                <div className="flex justify-center items-center space-x-2">
                <button className="flex justify-center items-center space-x-2 bg-black text-white border-2 border-transparent font-semibold px-6 py-2
                 rounded-lg cursor-pointer hover:bg-white hover:text-black hover:border-black transition-colors"
                onClick={() => dispatch(addProduct({id,name: productName, price: productPrice,quantity: 1, image: productImage}))} >
                   +
                </button>

                <button className="flex justify-center items-center space-x-2 bg-black text-white border-2 border-transparent font-semibold px-6 py-2
                 rounded-lg cursor-pointer hover:bg-white hover:text-black hover:border-black transition-colors"
                 onClick={() => dispatch(decreaseProduct({id}))}>
                    -
                </button>
                </div>
                </div>

    )
}