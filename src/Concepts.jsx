import { useState } from 'react'
import './ConceptsStyles.css'
import  { conceptList } from './Concept';

/**
 * 
 * @param {object} params (onSelected callback)
 * @returns 
 */
function Concepts(params) {
    const [selTag, setselTag] = useState('');

    /**
     * 
     * @param {string} tag name of concept selected
     * @param {callback} onSelected callback when selected changed
     */
    function onButton( tag, onSelected) {
        setselTag(tag);
        onSelected(tag);
    }
    /**
     * 
     * @returns component list of concept buttons
     */
    function listConcepts() {
        let res = [];
        conceptList.forEach(conc => {
            res.push(<button
                class={conc.tag === selTag?'selBtn':'btn'}
                onClick={() => onButton( conc.tag, params.onSelected)}
            >{conc.tag}
                </button>)

        });
        return res;
    }

    return (
        <div id="conceptsDiv">
            {listConcepts()}
        </div>
    )
}
export default Concepts
