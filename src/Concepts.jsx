import { useState } from 'react'
import './ConceptsStyles.css'
import concept, { conceptList } from './Concept';

function Concepts(params) {
    const [selTag, setselTag] = useState('');

    function onButton(evt, tag, onSelected) {
        setselTag(tag);
        onSelected(tag);
    }
    function listConcepts() {
        let res = [];
        conceptList.forEach(conc => {
            res.push(<button
                class={conc.tag == selTag?'selBtn':'btn'}
                onClick={(evt) => onButton(evt, conc.tag, params.onSelected)}
            >{conc.tag}
                </button>)

        });
        return res;
    }

    const [count, setCount] = useState(0)

    return (
        <div id="conceptsDiv"

        >
            {listConcepts()}

        </div>
    )
}
export default Concepts
