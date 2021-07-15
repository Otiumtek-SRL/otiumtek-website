import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../organisms/navbar'
import Footer from '../organisms/footer'

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
  isLanding: PropTypes.any.isRequired,
}

export default Layout