import { useState } from 'react';

const ClickTracker = () => {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState("");
    const registrarClick = (operacion) => {
        if (operacion === "-") {
            setCount(count - 1);
        } else {
            setCount(count + 1)
        }
        setDate(new Date());
        const actualDate = new Date();
        setDate(`${actualDate.getDate()}/
        ${actualDate.getMonth()}/
        ${actualDate.getFullYear()}
        ${actualDate.getHours()}:
        ${actualDate.getMinutes()}:
        ${actualDate.getSeconds()}`
        );
    }
    return (
        <>
            <button onClick={() => registrarClick("-")} >-</button>
            {count}
            <button onClick={() => registrarClick("+")} >+</button>
            <p>{date}</p>
        </>
    )
}

export default ClickTracker