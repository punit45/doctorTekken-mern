import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AppContext } from "../context/AppContext";
import { assets } from '../assets/assets';
const Appointment = () => {

  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const daysOfWeek = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
  const [docSlots, setDocSlots]  = useState([]);
  const [slotIndex,setSlotIndex] = useState(0);
  const [slotTime,setSlotTime] = useState('');
  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
    // console.log(docInfo)
  }

  const getAvailableSlots = async () => {
      setDocSlots([])
      // getting current dte
      let today = new Date()
      for(let i =0; i <= 7;i++){
        // get date with indexs
        let currDate = new Date(today);
        currDate.setDate(today.getDate()+i);
        // settng end time of the date with indexs
        let endTIme = new Date();
        endTIme.setDate(today.getDate()+i)
        endTIme.setHours(21,0,0,0)
        //settng hours
        if(today.getDate() === currDate.getDate()){
          currDate.setHours(currDate.getHours() > 10 ? currDate.getHours()+ 1 : 10)
          currDate.setMinutes(currDate.getMinutes() > 30 ? 30 : 0)
        } else {
          currDate.setHours(10)
          currDate.setMinutes(0)
        }

        let timeSlot = [];

        while(currDate < endTIme) {
          let formattedTime = currDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit' ,});
          // add slot to array
          timeSlot.push({
            datetime : new Date(currDate),
            time: formattedTime
          })
          // increse the currtime by 30min
          currDate.setMinutes(currDate.getMinutes() +30)
        }
        setDocSlots(prev => ([...prev,timeSlot]))
      }
  }


  useEffect(()=> {
    fetchDocInfo()
  },[doctors,docId]);


  useEffect(()=> {
    getAvailableSlots()
  },[docInfo]);

  useEffect(()=>{
console.log(docSlots)
  },[docSlots])

  return docInfo && (
    <div>
      <div  className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:w-max-72 rounded-lg' src={docInfo.image} alt="" />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {docInfo.name} 
            <img className='w-5' src={assets.verified_icon} alt="" />
          </p>
          <div className='flex items-center gap-2 text-sm text-gray-600 mt-1'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-sm rounded-full'>{docInfo.experience}</button>
          </div>
          <div>
            <p className='flex items-center  gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt="" /></p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>
          <p className='text-gray-500 mt-5 font-medium'>Appointment Fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span></p>
        </div>
      </div>
      {/* slot booking */}
      
    </div>
  )
}

export default Appointment