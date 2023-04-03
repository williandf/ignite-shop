import Image from "next/image"
import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../styles/pages/product"

export default function Product() {
    const { query } = useRouter()
    return (
        <ProductContainer>
            <ImageContainer>
                
            </ImageContainer>
            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 79,90</span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, quisquam. Numquam aspernatur rem eius hic beatae? Maiores sapiente numquam esse dolores qui laboriosam. Adipisci, sit. Eum veniam tempora omnis itaque?</p>
                <button>Comprar Agora</button>
            </ProductDetails>
        </ProductContainer>
    )
}