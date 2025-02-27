
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown'


function Recipe(props) {
  return (
    <>
    <section className="recipe-text">
        <ReactMarkdown>
                {props.recipe}
        </ReactMarkdown>
    </section>

    </>
  )
}

export default Recipe

Recipe.propTypes = {
    recipe: PropTypes.string
}