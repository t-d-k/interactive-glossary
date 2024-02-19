import { useState } from 'react'
import './DetailsStyles.css'


function Details(params) {

    const [count, setCount] = useState(0)
   
    return (
        <div id="btnDiv" style={{ backgroundColor: params.col }}
            onClick={getCol}
        >
        </div>
    )
}
export default Details
