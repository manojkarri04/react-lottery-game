import './TicketNum.css'
export default function PrintNum({ticket})
{
    return(
       <div className="Token">
        { 
         ticket.map((num, index) => (
            <span key = {index}>{num}{" "}</span>
        ))}
    </div>     
    )
      
}