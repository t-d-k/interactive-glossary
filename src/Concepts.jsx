import { useState } from 'react'
import './ConceptStyles.css'


function Concept(params) {

    const [count, setCount] = useState(0)
   
    return (
        <div id="btnDiv" style={{ backgroundColor: params.col }}
            onClick={getCol}
        >
        </div>
    )
}
export default Concept
