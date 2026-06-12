import {useState} from "react";

export default function LikeButton() {
    let [isLiked , setIsLiked] = useState(false);
    let toogleBtn = () => {
        setIsLiked(!isLiked);
    };
    return (
        <div>
             <p onClick = {toogleBtn}>
            {
                isLiked ? (
                    <i className ="fa-solid fa-heart"></i>
                ) : (
                    <i className ="fa-regular fa-heart"></i>
                )
            } 
           </p>
        </div>
    );
}