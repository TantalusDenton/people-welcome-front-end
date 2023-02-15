import React, { useContext } from "react"
import CurrentAiContext from "./CurrentAiContext"

function Ai(props) {
    const { setCurrentAi } = useContext(CurrentAiContext)
    const onClickAi = () => {
        setCurrentAi(props.value)
    }

    return(
        <div className="ai">
            <button onClick={onClickAi}>
                {/* <img src={props.image}/>     */}
            </button>
            <h3>{props.value}</h3>
        </div>
    )
}

export default Ai