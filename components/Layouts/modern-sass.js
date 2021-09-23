import React, { useEffect } from 'react'
import Head from 'next/head'

// import Custom Components
import Header from '../../containers/common/header'
import FooterSection from '../../pages/layouts/sections/modern-sass/footer'
import Copyright from '../../pages/layouts/sections/modern-sass/copyright'

const ModernSassLayout = ({title, children}) => {

    useEffect(() => {
        document.body.style.setProperty('--primary', '#fb3b64')
        document.body.style.setProperty('--secondary', '#071828')
        document.body.style.setProperty('--light', '#071828')
        document.body.style.setProperty('--dark', '#fb3b64')
    })

    return (
        <div>
            <Head>
                <title>{title || 'Menuviour'} </title>
            </Head>

            <Header className="saas1"  />

            {children}

            <FooterSection />

            <Copyright />
        </div>
    )
}

export default ModernSassLayout;