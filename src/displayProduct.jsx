import "./box.css"
import Price from "./display_Price"
import Description from "./display_Description"
import Title from "./display_Title"

export default function Product({title ,description, price})
{
    return (
        <div className="box">
            {/* <h1>{title}</h1>
            <h1>{description}</h1>
            <h1>{price}</h1> */}
            <Title head = {title}/>
            <Description detail = {description}/>
            <Price cost = {price}/>
        </div>
    )
}