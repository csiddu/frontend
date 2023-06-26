import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Dropdown = () => {

    const navigate = useNavigate();

    const [yearList,setYearList] = useState([]);

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BACKEND}/admins/getYears`).then((res)=>{
            setYearList(res.data.allTeam)
          })
    },[])

    function clickedYear(year){
        console.log("hiiii")
        axios.get(`${process.env.REACT_APP_BACKEND}/admins/teamByYear?year=${year}`).then((obj)=>{
            console.log(obj.data)
            // navigate('/team',{state:obj.data.team});
        })
    }

    const [isOpen, setIsOpen] = useState(false);
    const getCurrentYear = () => new Date().getFullYear();
    const getYearRange = (startYear) => `${startYear}-${startYear + 1}`;
    // const years = Array.from({ length: 10 }, (_, index) => getYearRange(getCurrentYear() - index));
    return (
        <div className="p-5 md:p-1 text-2xl md:text-base text-center md:relavtive">
            <Link
                className="p-4 md:text-gray-500 hover:bg-gray-100"
                onMouseEnter={() => setIsOpen(true)}
            >
                Our Team
                {/* <FontAwesomeIcon icon={faChevronDown} className="ml-1" /> */}
            </Link>
            {isOpen && (
                <div className="absolute z-10 w-[95%] md:w-[20%] md:mt-3 mb-[5%] origin-top-right bg-white border border-gray-100 rounded-md shadow-lg transition-transform duration-200 ease-in-out transform opacity-100 translate-y-[5%] " onMouseLeave={() => setIsOpen(false)}>
                    <div className="max-h-40 overflow-y-auto ">
                        {yearList.map((i) => (
                            <a
                                key={i.year}
                                className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                                onClick={() => {
                                    // Handle year selection
                                    // console.log(`Selected year: ${i.year}`);
                                    setIsOpen(false);
                                    clickedYear(i.year);
                                }}
                            >
                                {i.year -1 } - {i.year}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
export default Dropdown;

/* normal dropdown with limited years */
        // <div className='inline-flex bg-white border rounded-md ml-[35%] md:ml-[36%] mt-[4%] md:mt-[5%] drop-shadow-xl'>
        //     <div className="relative">
        //         <button
        //             type="button"
        //             className='inline-flex items-center justify-center h-full w-50 px-2 text-gray-600 border-l border-gray-100 hover:text-gray-700 rounded-r-md hover:bg-gray-50'
        //             onClick={toggleDropdown}
        //             aria-expanded={isOpen}
        //             aria-haspopup="true"
        //         >
        //             Select a year
        //             <FontAwesomeIcon icon={faChevronDown} className="ml-10 h-5 w-5" />
        //         </button>
        //     </div>
        //     {isOpen && (
        //         <div className={`absolute z-10 w-[100%] mt-6 mb-[5%] origin-top-right bg-white border border-gray-100 rounded-md shadow-lg  ${isOpen ? 'transition-transform duration-100 ease-in-out opacity-100 translate-y-[10%]' : 'opacity-0 translate-y-[5%]'}`}>
        //             <div className="max-h-40 overflow-y-auto">
        //                 {years.map((year) => (
        //                     <a
        //                         key={year}
        //                         href="#"
        //                         className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
        //                         onClick={() => {
        //                             // Handle year selection
        //                             console.log(`Selected year: ${year}`);
        //                             toggleDropdown();
        //                         }}
        //                     >
        //                         {year}
        //                     </a>
        //                 ))}
        //             </div>
        //         </div>
        //     )}
        // </div>