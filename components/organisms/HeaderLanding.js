import PropTypes from 'prop-types'
import Image from 'next/image'
import ListTech from '../molecules/ListTech'

const Header = ({ slogan, subslogan }) => {

    return (
        <div id="home" className="flex items-center pt-10 pb-5 sm:pb-5 flex-col">
            <Image src="/images/header.png" alt="Otiumtek" width={750} height={250} className="h-80 opacity-50"/>
            <div className="mt-2 text-center">
                <h1 className="text-3xl font-bold text-shadow">{slogan}</h1>
                <p className="text-xl mt-4 mb-5">{subslogan}</p> 
            </div>
            <ListTech />
        </div>
    )
}

Header.propTypes = {
    slogan: PropTypes.any.isRequired,
    subslogan: PropTypes.any.isRequired,
}

export default Header