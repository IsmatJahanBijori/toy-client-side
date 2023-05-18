import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabContainer = () => {
    return (
        <div>
            <Tabs className="m-28">
                <TabList>
                    <Tab>Jewellary Making</Tab>
                    <Tab>Drawing Supplies</Tab>
                    <Tab>Sculpting</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                    <h2>Any content 4</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 5</h2>
                    <h2>Any content 6</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabContainer;