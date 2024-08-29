import Image from "next/image";
import { useState } from "react";
import { BiCartAdd } from "react-icons/bi";
import { addProduct } from "../features/cartProducts/cartProductsSlice";
import { useDispatch } from "react-redux";

type ProductCardProps = {
    id: number,
    productCategory: string,
    productName: string,
    productImage: string,
    productPrice: number,
    productDescription: string,
};

export const ProductCard = ({id, productCategory, productName, productImage, productPrice, productDescription}: ProductCardProps) => {

    const dispatch = useDispatch()
    const [descriptionModal, setDescriptionModal] = useState(false)

    function openModal() {
        setDescriptionModal(true)
    }

    function closeModal() {
        setDescriptionModal(false)
    }


    return (
        <div className="w-96 h-96 flex flex-col justify-center items-center shadow-md space-y-5">
            <div className="relative w-32 h-32">
                <Image src={productImage} fill objectFit="contain" sizes="(max-width: 768px) 100vw, 33vw" alt="imagem-produto"/>
            </div>

                <h1 className="font-semibold">{productName}</h1>
                <h1>R$ {productPrice}</h1>

                <div className="flex justify-center items-center space-x-2">
                <button className="flex justify-center items-center space-x-2 bg-black text-white border-2 border-transparent font-semibold px-6 py-2
                 rounded-lg cursor-pointer hover:bg-white hover:text-black hover:border-black transition-colors">
                    <span onClick={() => dispatch(addProduct({id: id, image: productImage, name: productName, price: productPrice, quantity: 1}))}> adicionar</span> <BiCartAdd/>
                </button>

                <button className="flex justify-center items-center space-x-2 bg-black text-white border-2 border-transparent font-semibold px-6 py-2
                 rounded-lg cursor-pointer hover:bg-white hover:text-black hover:border-black transition-colors" onClick={openModal}>
                    descricao
                </button>
                </div>


                {/* product description modal */}

                
                <div className={`${descriptionModal ? 'w-1/2 h-1/2 z-10 opacity-100' : 'w-0 h-0 -z-10 opacity-0'} bg-black text-white rounded-md px-32
                 font-medium fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] transition-all flex flex-col justify-center items-center gap-6`} >
                    {productDescription}

                    <button className="flex justify-center items-center space-x-2 bg-white text-black border-2 border-transparent font-semibold px-6 py-2
                 rounded-lg cursor-pointer" onClick={closeModal}>fechar</button>
                </div> 
                

        </div>
    )
}