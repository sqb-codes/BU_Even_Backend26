import { Product } from "./Product";

export function Main({data}) {
    return (
        <div>
            <ul className="products">
                {/* <Product
                    p_name="Iphone 17 SE"
                    p_price="89999"
                /> */}

                {/* <Product {...data[0]}/>
                <Product {...data[1]}/>
                <Product {...data[2]}/> */}

                {
                    data.map((prod) => (
                        <Product product={prod}/>
                    ))
                }


                {/* <li>
                    <div className="img-wrapper">
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/WD/JanART26/14th/New/PC_CC_758x608._SY608_CB773132748_.jpg" alt="img" />
                    </div>
                    <div className="product-desc">
                        <h2>Accessories</h2>
                        <p>Explore accessories with discount</p>
                    </div>
                </li> */}
            </ul>
        </div>
    )
}