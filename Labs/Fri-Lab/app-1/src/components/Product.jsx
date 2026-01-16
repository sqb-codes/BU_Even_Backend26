// export function Product({p_id, p_name, p_img, p_price, p_rating}) {
//     return (
//         <li>
//             <h2>{p_name}</h2>
//             <p>{p_price}</p>
//         </li>
//     )
// }

export function Product({product}) {
    return (
        <li>
            <img src={product.p_img}/>
            <h2>{product.p_name}</h2>
            <p>{product.p_price}</p>
            <p>Rating: {product.p_rating}</p>
        </li>
    )
}