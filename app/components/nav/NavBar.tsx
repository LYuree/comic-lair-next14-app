import Link from "next/link";
import Container from "../Container";
import Image from "next/image";
import gekkoLogoSVG from "../nav/gekko-logo.svg"
import gekkoLogoPNG from "./gekko-logo.png"
import { AiFillShopping, AiOutlineHeart, AiOutlineShopping, AiOutlineShoppingCart } from "react-icons/ai";

const NavBar = () => {
    return (  <div
    className="
    sticky
    top-0
    w-full
    bg-black
    text-white
    z-30

    ">
        <div className="
        py-4
        border-b-[1px]
        ">
            <Container>
                <div className="flex
                flex-row
                items-center
                justify-between
                gap-3">
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                        src={gekkoLogoPNG}
                        alt="Comic Lair"
                        width={80}
                        height={80}/>
                        <div className="cflex flex-col">
                            <p className="font-bold text-lg">Comic Lair</p>
                            <div className="text-xs">
                                <p>Магазин графических</p>
                                <p>новелл и комиксов</p>
                            </div>
                        </div>
                    </Link>
                    <div>Search</div>
                    <div className="flex items-center gap-3">
                        <AiOutlineShopping />
                        <AiOutlineHeart />
                        <div>comiclairsales@gmail.com</div>
                    </div>
                </div>
            </Container>


        </div>
    </div> );
}
 
export default NavBar;