import React, {FunctionComponent} from 'react';
import Footer from "../src/components/Footer/Footer";
import Button from "../src/components/Button";
import Textdesc from '../src/components/Textdesc';
import Layout from '../src/components/Layout';


interface OwnProps {
}

type Props = OwnProps;

const index: FunctionComponent<Props> = (props) => {

    return (
        <div>
            <Layout>
                <Button content='Download for iOS'/>
                <Button secondary content='Download for Mac'/>
                <Textdesc title={'A history of everything you copy'} desc={'Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.'} />
                <Textdesc title={'Keep track of your snippets'} desc={'Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.'} />
                <Textdesc title={'Quick Search'} desc={'Easily search your snippets by content, category, web address, application, and more.'} />
                <Textdesc title={'iCloud Sync'} desc={'Instantly saves and syncs snippets across all your devices.'} />
                <Textdesc title={'Complete History'} desc={'Retrieve any snippets from the first moment you started using the app.'} />
                <Textdesc title={'Access Clipboard Anywhere'} desc={'Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.'} />
            </Layout>
            <Footer/>
        </div>
    );
};

export default index;
