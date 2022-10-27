import React, {Children, FunctionComponent, ReactNode} from 'react';


type Props = {
    children:ReactNode
   
};

const Layout: FunctionComponent<Props> = (props) => {

    const {children} = props;

    return (
        <div className='mx-10'>
            {children}
        </div>
    );
};

export default Layout;
