import './App.css';
import Hello from "./Activity1";
import Amazon from "./Activity2";
import LikeButton from "./Activity3";
import MyTodo from "./Activity4"; // Updated to uppercase
import Lottery from "./Activity5";

export function WinCondition(T , WinningSum)
{
        // for (let i = 0; i < 3;i++)
        // {
        //     sum = sum + T[i];
        // }
        let sum = T.reduce((acc, num) => {
            return acc + num;
        },0);
        return sum == WinningSum;
}

export default function App() {    
    return (
        /* Activity 1
            <>
                <Hello userName = "Manoj" textColor ="red"/>
                <Hello userName = "Manoj" textColor ="blue"/>
            </>
        */

        /* Activity 2
            <div>
                { <Amazon/>}
            </div>
        */

        /* Activity 3
            <div>
                <LikeButton/>
            </div>
        */

        /* Activity 4
            <div>
                <MyTodo /> 
            </div>
        */

        /* Activity 5 */
        <div className='Web'>
            <Lottery n = {3} WinningSum = {15}/> 
        </div>
    );
};