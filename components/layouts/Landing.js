import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../organisms/Navbar'
import Footer from '../organisms/Footer'

const Layout = ({ children, isLanding, infoLandingPage, ...rest }) => {

    const childrenWithProps = React.cloneElement(children, rest)
    return (<div>
        <Navbar infoLandingPage={infoLandingPage} isLanding={isLanding} />
        {childrenWithProps}
        <Footer infoLandingPage={infoLandingPage} />
    </div>)

}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  infoLandingPage: PropTypes.any.isRequired,
}

export default Layout
