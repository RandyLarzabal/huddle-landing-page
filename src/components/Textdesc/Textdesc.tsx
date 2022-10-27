import React, {FunctionComponent} from 'react';
import { Icon } from '@iconify/react';


type Props = {
    
    title:string;
    desc:string;
    iconName?:string;
};

const Textdesc: FunctionComponent<Props> = (props) => {

    const {title,desc, iconName} = props;

    return (
        <div className={'px-8 pb-12 flex flex-col items-center'}>

{iconName && 
    <Icon className={"w-12 h-12 pb-5"} icon={iconName}/> }
            
            
            <p className={'text-3xl font-semibold text-center mb-4'} >{title}</p>
            <p className={'text-desc-gray text-base font-normal text-center'}>{desc}</p>
        </div>
    );
};

export default Textdesc;
