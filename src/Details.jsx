import { useState } from 'react'
import './DetailsStyles.css'


function Details(params) {

    const [count, setCount] = useState(0)
   
    return (
        <div id="detailsDiv"         
        >
           {params.contents}    </div>
    )
}
export default Details
