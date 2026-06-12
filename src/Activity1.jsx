export default function Hello({userName , textColor})
{
    return (
        <p style = {{color: textColor}}> hello {userName} </p>
    );
}