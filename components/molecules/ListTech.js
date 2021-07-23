import PropTypes from 'prop-types'
import IconDev from '../atoms/IconDev'
import ReactTooltip from 'react-tooltip'

const ListTech = () => {
    const tech = [
        {name: 'Javascript', icon: 'devicon-javascript-plain'},
        {name: 'React JS', icon: 'devicon-react-original'},
        {name: 'Next JS', icon: 'devicon-nextjs-original'},
        {name: 'Vue JS', icon: 'devicon-vuejs-plain'},
        {name: 'JQuery', icon: 'devicon-jquery-plain'},
        {name: 'Express JS', icon: 'devicon-express-original'},
        {name: 'Node JS', icon: 'devicon-nodejs-plain'},
        {name: 'MongoDB', icon: 'devicon-mongodb-plain'},
        {name: 'Php', icon: 'devicon-php-plain'},
        {name: 'Laravel', icon: 'devicon-laravel-plain'},
        {name: 'Symfony', icon: 'devicon-symfony-original'},
        {name: 'Yii', icon: 'devicon-yii-plain'},
        {name: 'Dart', icon: 'devicon-dart-plain'},
        {name: 'Flutter', icon: 'devicon-flutter-plain'},
        {name: 'C#', icon: 'devicon-csharp-plain'},
        {name: 'ASP NetCore', icon: 'devicon-dotnetcore-plain'},
        {name: 'Java', icon: 'devicon-java-plain'},
        {name: 'Spring', icon: 'devicon-spring-plain'},
        {name: 'C++', icon: 'devicon-cplusplus-plain'},
    ]

    return (
        <>
            <div className="mt-8 flex space-y-2 w-full pb-5 justify-center flex-wrap">
                {tech.map((item, index) => <div  key={index} className="mb-4 w-3/12 md:w-1/12 flex justify-center" data-background-color="#DD0837" type="dark" data-tip={item.name}>
                    <IconDev name={item.icon} />
                </div>)}
            </div>
            <ReactTooltip/>
        </>
    )
}

ListTech.propTypes = {
}

export default ListTech
