import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { SiDiscord, SiVk } from "react-icons/si";

const Footer = () => {
    return (<footer className="
    bg-black
    text-white
    text-sm
    mt-16
    ">
        <Container>
            <div className="flex justify-between items-center">
                <div className="text-6xl font-bold pt-8">COMIC LAIR</div>
                <div className="flex items-center pt-8 gap-3">
                        <Link href="#">
                            <SiDiscord size={48}></SiDiscord>
                        </Link>
                        <Link href="#">
                            <SiVk size={48}></SiVk>
                        </Link>
                        <Link href="#">
                            <FaTelegramPlane size={48}></FaTelegramPlane>
                        </Link>
                        <Link href="#">
                            <AiFillYoutube size={48}></AiFillYoutube>
                        </Link>

                </div>
            </div>
            <div className="
            flex
            flex-col
            md:flex-row
            justify-between
            pt-16
            pb-8
            ">
                <FooterList>
                    <h3 className="font-bold text-3xl mb-3">МАГАЗИН</h3>
                    <Link href="#">Электронные комиксы</Link>
                    <Link href="#">Печатные комиксы</Link>
                    <Link href="#">Оплата</Link>
                    <Link href="#">Доставка</Link>
                    <Link href="#">Возврат и обмен</Link>
                    <Link href="#">Программа лояльности</Link>
                </FooterList>
                <FooterList>
                    <h3 className="font-bold text-3xl mb-3">COMIC LAIR</h3>
                    <Link href="#">О нас</Link>
                    <Link href="#">Контакты</Link>
                    <Link href="#">Партнёрам</Link>
                </FooterList>
                <FooterList>
                    <Link href="#">Пользовательское соглашение</Link>
                    <Link href="#">Политика конфиденциальности</Link>
                </FooterList>
            </div>
            <div className="mt-4 mb-4 border-solid border-white border-t pt-4">
                Копирование материалов без разрешения запрещено &copy; ООО "Comic Lair", {new Date().getFullYear()}
                </div>
        </Container>
    </footer>)
}
 
export default Footer;