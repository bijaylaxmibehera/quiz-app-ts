import React from "react";

type HeaderProps={
    title: string,
}

const Header: React.FC <HeaderProps> =({title})=>{
    return (
        <>
        <h1 className="font-semibold text-2xl flex justify-center">{title}</h1>
        </>
    )
}

export default Header;