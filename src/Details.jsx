import './DetailsStyles.css'

/**
 * 
 * @param {object} params contents = details to show
 * @returns details div component
 */
function Details(params) {

    return (
        <div id="detailsDiv"> {params.contents}  </div>
    )
}
export default Details
