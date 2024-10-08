import Image from "next/image";
import banner1 from "/app/images/banner1.webp"

// import banner1 from "./nav/banner1.png"
import Container from "./Container";
import Link from "next/link";

const HomeBanner = () => {
    return (
    <div>
        <Container>
            <div className="mt-4">
                <Link href="#">
                    <Image src={banner1}
                    width={1160}
                    height={475}
                    alt="Первые выпуски Grim Horse - бесплатно!"
                    />
                </Link>
            </div>
        </Container>
    </div> );
}
 
export default HomeBanner;