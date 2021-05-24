function Button(props)  {
    return (
        <button type={"button"} disabled={props.disabled}>{props.title}</button>
    )
}

export default Button;