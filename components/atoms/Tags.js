import PropTypes from 'prop-types'

const Tags = ({ tags }) => {
    
    if(!tags) 
        return null
    
    return (
        <span className="text-xs p-3 bg-gray-100">{tags.map(item => item.name).join(", ")}</span>
    )
}

Tags.propTypes = {
    tags: PropTypes.array,
}

export default Tags
