import React, { ReactNode } from 'react';
import Footer from './components/Footer';
import Nav from './components/Nav';

interface Props{
    children: ReactNode
}

const PublicLayout:React.FC<Props> = ({children}) =>{

    return(
        <div>
            <Nav />
            {children}
            <Footer />
        </div>
    )
}

export default PublicLayout;