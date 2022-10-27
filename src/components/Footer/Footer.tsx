import React, {FunctionComponent} from 'react';
import { Icon } from '@iconify/react';

type Props = {};

const Footer: FunctionComponent<Props> = (props) => {

    return (
        <div className={"bg-light-grey flex text-center flex-col items-center py-12"}>
            <img src={'/images/logo.svg'} className={'w-11 h-11 mb-10'}/>
            <ul className={"mb-7 text-lg"}>
                <li className={"mb-5"}>Faqs</li>
                <li className={"mb-5"}>Contact us</li>
                <li className={"mb-5"}>Privacy Policy</li>
                <li className={"mb-5"}>Press Kit</li>
                <li>Install Guide</li>
            </ul>
            <div className={"flex text-center flex-row items-center "}>
                <Icon className={"w-6 h-6"} icon="entypo-social:facebook" />
                <Icon className={"mx-10 w-6 h-6"} icon="entypo-social:twitter" />
                <Icon className={"w-6 h-6"} icon="entypo-social:instagram" />
            </div>
        </div>
    );
};

export default Footer;
