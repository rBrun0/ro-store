'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { CiMail, CiSearch } from "react-icons/ci"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { IoBagHandleOutline } from "react-icons/io5"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store"
import { setSearchTerm } from "../features/search/searchSlice"

export const Header = () => {

    const [searchValue, setSearchValue] = useState('')

    const searchSliceValue = useSelector((state: RootState) => state.searchSlice.sValue)
    const dispatch = useDispatch()

    dispatch(setSearchTerm(searchValue))
    useEffect(() => {
        console.log(searchSliceValue)
    }, [searchValue])

    return (
    <>
        <div className="max-w-full h-[30px] bg-black text-white flex items-center justify-center-center md:justify-between md:px-56 space-x-4 text-[15px] font-medium">
            <FaArrowLeft className="text-xs cursor-pointer hidden md:block"/>
        <div>
            As melhores peças voce encontra aqui
        </div>
            <FaArrowRight className="text-xs cursor-pointer hidden md:block"/>
        </div>
        <header className="max-w-full flex items-center justify-between py-4 px-8 shadow-md">

        <div className="flex items-center justify-center space-x-2">
        <CiSearch className="text-xl font-bolder "/>
        <input type="text" className="w-64 h-7 placeholder:to-black outline-none" placeholder="O que voce esta procurando?"
        value={searchValue} onChange={((e) => setSearchValue(e.target.value))}
        />
        </div>

        <h1 className="font-bold text-3xl pr-36 hidden md:block">ROMERO'S</h1>
        
        <div className="flex justify-center items-center space-x-6">
        <CiMail className="text-2xl cursor-pointer"/>
        <Link href={'/cart'}><IoBagHandleOutline className="text-2xl cursor-pointer"/></Link>
        </div>

      </header>
    </>
    )
}