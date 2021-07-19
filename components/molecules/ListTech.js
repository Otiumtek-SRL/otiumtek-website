import PropTypes from 'prop-types'
import IconDev from '../atoms/IconDev'

const ListTech = () => {
    const tech = ['devicon-react-original', 'devicon-laravel-plain', 'devicon-nodejs-plain', 'devicon-flutter-plain', 'devicon-cplusplus-plain', 'devicon-java-plain']

    return (
        <div className="mt-8 flex space-y-2 w-full pb-5 justify-center flex-wrap">
            {tech.map((item, index) => <IconDev key={index} name={item} />)}
        </div>
    )
}

ListTech.propTypes = {
}

export default ListTech
