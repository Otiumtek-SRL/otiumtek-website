import PropTypes from 'prop-types'
import IconDev from '../atoms/IconDev'
import ReactTooltip from 'react-tooltip';

const ListTech = () => {
    const tech = [
        {name: 'React JS', icon: 'devicon-react-original'}, 
        {name: 'Laravel', icon: 'devicon-laravel-plain'}, 
        {name: 'Node JS', icon: 'devicon-nodejs-plain'},
        {name: 'Flutter', icon: 'devicon-flutter-plain'}, 
        {name: 'C++', icon: 'devicon-cplusplus-plain'},
        {name: 'Java', icon: 'devicon-java-plain'}
    ]

    return (
        <>
            <div className="mt-8 flex space-y-2 w-full pb-5 justify-center flex-wrap">
                {tech.map((item, index) => <div className="w-3/12 md:w-1/12 flex justify-center" data-background-color="#DD0837" type="dark" data-tip={item.name}>
                    <IconDev key={index} name={item.icon} />
                </div>)}
            </div>
            <ReactTooltip/>
        </>
    )
}

ListTech.propTypes = {
}

export default ListTech
