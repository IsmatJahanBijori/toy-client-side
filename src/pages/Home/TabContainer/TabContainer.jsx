import { useEffect } from 'react';
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabContainer = () => {

    //jewellary
    const [data1, setData1] = useState([])
    useEffect(() => {
        fetch('jewelryMaking.json').then(res => res.json()).then(data => setData1(data))
    }, []);

    //drawing
    const [data2, setData2] = useState([])
    useEffect(() => {
        fetch('drawingSupplies.json').then(res => res.json()).then(data => setData2(data))
    }, []);

    //sculpting
    const [data3, setData3] = useState([])
    useEffect(() => {
        fetch('sculpting.json').then(res => res.json()).then(data => setData3(data))
    }, []);


    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div>
            <Tabs className="mb-20 md:m-28 font-serif">
                <TabList className="text-2xl ml-10 font-semibold mb-3">
                    <Tab>Jewellary Making</Tab>
                    <Tab>Drawing Supplies</Tab>
                    <Tab>Sculpting</Tab>
                </TabList>
                {/*jewellary */}
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-4'>
                        {
                            data1.map(dt1 =>

                                <div className="bg-slate-100 ml-10 mb-5 w-[300px] md:w-[400px] shadow-md rounded-lg p-4 transition-transform duration-300 transform hover:translate-y-[-10px] text-xl" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                    <img src={dt1.picture} alt="Card Image" className="w-full h-40 object-cover rounded-md mb-4" />
                                    <div className={`transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'} mb-2`}>
                                        <h3 className="text-xl font-bold mb-2">{dt1.name}</h3>
                                        <p className="text-gray-600 mb-2">${dt1.price}</p>
                                        <p className="text-gray-800 mb-2">Ratings: {dt1.rating}</p>
                                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">View Details</button>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </TabPanel>

                {/*drawing */}
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-4'>
                        {
                            data2.map(dt2 =>

                                <div className="bg-slate-100 ml-10 mb-5 w-[300px] md:w-[400px] shadow-md rounded-lg p-4 transition-transform duration-300 transform hover:translate-y-[-10px] text-xl" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                    <img src={dt2.picture} alt="Card Image" className="w-full h-40 object-cover rounded-md mb-4" />
                                    <div className={`transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'} mb-2`}>
                                        <h3 className="text-xl font-bold mb-2">{dt2.name}</h3>
                                        <p className="text-gray-600 mb-2">${dt2.price}</p>
                                        <p className="text-gray-800 mb-2">Ratings: {dt2.rating}</p>
                                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">View Details</button>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </TabPanel>

                {/*sculpting */}
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-4'>
                        {
                            data3.map(dt3 =>

                                <div className="bg-slate-100 ml-10 mb-5 w-[300px] md:w-[400px] shadow-md rounded-lg p-4 transition-transform duration-300 transform hover:translate-y-[-10px] text-xl" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                    <img src={dt3.picture} alt="Card Image" className="w-full h-40 object-cover rounded-md mb-4" />
                                    <div className={`transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'} mb-2`}>
                                        <h3 className="text-xl font-bold mb-2">{dt3.name}</h3>
                                        <p className="text-gray-600 mb-2">${dt3.price}</p>
                                        <p className="text-gray-800 mb-2">Ratings: {dt3.rating}</p>
                                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">View Details</button>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabContainer;