import React, {FunctionComponent} from 'react';
import Footer from "../src/components/Footer/Footer";
import Button from "../src/components/Button";


interface OwnProps {
}

type Props = OwnProps;

const index: FunctionComponent<Props> = (props) => {

    return (
        <div>
            <Button content={"truc"}/>
            <Footer/>
        </div>
    );
};

export default index;
