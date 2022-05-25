import React from 'react';
import Filter from './Complaits/Filter';
import SingleComplaints from './Complaits/SingleComplaints';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

function Complaints() {
    return (
        <div>
            <Navbar/>
            <div className="grid grid-cols-12">
                <div className="col-span-8">
                <div className="flex items-center">
            <h1 className='text-4xl text-gray-400 font-bold tracking-wider mr-3'>All Complaints</h1>
            <h5 className='text-xl text-gray-400 mt-1'>|  <span className='ml-7'>9.012.094 complaints</span></h5>
          </div>
          <hr />
          <SingleComplaints/>
                </div>
                <div className="col-span-4">
        <Filter/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Complaints;