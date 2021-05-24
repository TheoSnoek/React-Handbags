function Tile(props)    {
    return(
        <section>
            <img src={props.image} alt={props.title}/>
            <h2>{props.title}</h2>
            <p>{props.story}</p>
        </section>
    )
}

export default Tile