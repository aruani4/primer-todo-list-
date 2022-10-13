
const Button = ({ type = "button", children, click = () => {} }) => {
    
    return(
        <button type={type} onClick={click} >{children}</button>
    )
}

export default Button;