import React, { ReactNode } from 'react';
import Nav from './components/Nav';

interface Props{
    children: ReactNode
}

const PublicLayout:React.FC<Props> = ({children}) =>{

    return(
        <div>
            <Nav />
            {children}
        </div>
    )
}

export default PublicLayout;