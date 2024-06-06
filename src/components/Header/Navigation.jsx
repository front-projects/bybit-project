import Li from "./Li";

const Navigation = () =>{
    return <nav className="text-[14px] leading-[48px] ml-[12px]">
        <ul className="flex">
            <Li active={true} className='border-b-2 border-[#ffb11a] mb-[2px] pt-[2px] text-[#ffb11a] leading-[46px]'>Comprar Cripto</Li>
            <Li>Mercados</Li>
            <Li>Trading</Li>
            <Li>Derivados</Li>
            <Li>Herramientas</Li>
            <Li>Finanzas</Li>
        </ul>
    </nav>
}

export default Navigation;