function Product(props)  {
    return (
        <article>
            <span>{props.promoText}</span>
            <img src={props.image} alt={props.name}/>
            <p>{props.name}</p>
            <h4>{props.price}</h4>
        </article>
    )
}

export default Product;