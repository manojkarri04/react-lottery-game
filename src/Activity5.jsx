import {useState} from "react";
import {WinCondition} from "./App.jsx";
import PrintNum from "./TicketNum";
import "./Activity5.css";
function genRandom(n)
{   
    let arr = new Array(n);
    for(let i = 0;i < n;i++)
    {
        arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;
}

export default function Lottery({n , WinningSum})
{
    let [ticket , setTicket] = useState(() => {
        return genRandom(n)
    });

    let isWin = WinCondition(ticket, WinningSum);
    let newTicket = () => {
        setTicket(genRandom(n));
    };
    return (
        <div className="Ticket">
            <div className="title">
              <h1>Lottery Game</h1>
            </div>
            <i>Make the sum of Token as 15 to win</i>
            <div className="token">
                <PrintNum ticket = {ticket}/>    
            </div>    
            <h3>{isWin && "Congratulations, you won!"}</h3>
            <h3>{!isWin && "Sorry, better luck next time!"}</h3>
            <div className="buy-btn">
                <button
                onClick={newTicket}
                style={{
                        border: "1px solid black",
                        backgroundColor: "yellow",
                        borderRadius: "10px",
                        paddingTop: "6px",
                        paddingBottom: "6px",
                        cursor:"pointer",
                    }}
                >
                Buy New Ticket
                </button>
            </div>
        </div>        
    );
}
// no of digits ticket must contain is hardcoded
// sum is hardcoded
// printing ticket is hardcoded