import React, {FunctionComponent} from 'react';

type Props = {
    secondary?: boolean;
    content:string;
};

const Button: FunctionComponent<Props> = (props) => {
    const {secondary,content} = props;

    return (
        <button
            className={`${secondary ? "bg-blue-primary shadow-inner-shadow-blue" : "bg-green-primary shadow-inner-shadow-green"} w-full h-14 rounded-full text-white  font-semibold text-lg`}>
            {content}
        </button>
    );
};

export default Button;
