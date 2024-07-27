/* eslint-disable react/no-unknown-property */
import experience from '../../../assets/icons/schedule_3652191.png'
import Projects from '../../../assets/icons/boost_10497959.png'
import clients from '../../../assets/icons/dad_4190194.png'
import certificate from '../../../assets/icons/certificate_8123718.png'
import CountUp from 'react-countup';

const Experience = () => {
    
    return (
        <div className='grid gap-10 mt-10 p-10 md:grid-cols-2 lg:grid-cols-4 experience-style rounded-md bg-opacity-60 mx-3'>
            <div className='text-center space-y-2 transform transition duration-500 hover:scale-110'>
                <img className='w-10 mx-auto' src={experience} alt="" />
                <h2 className='text-3xl font-bold text-[#03e9f4]'>1</h2>
                <h4 className='text-xl text-gray-400 font-medium'>Year of Experiance</h4>
            </div>
          
            <div className='text-center space-y-2 transform transition duration-500 hover:scale-110'>
                <img className='w-10 mx-auto' src={Projects} alt="" />
                <h2 className='text-3xl font-bold text-[#03e9f4]'>{<CountUp end={10} duration={2}/>}+</h2>
                <h4 className='text-xl text-gray-400 font-medium'>Projects Complete</h4>
            </div>
          
            <div className='text-center space-y-2 transform transition duration-500 hover:scale-110'>
                <img className='w-10 mx-auto' src={clients} alt="" />
                <h2 className='text-3xl font-bold text-[#03e9f4]'>0</h2>
                <h4 className='text-xl text-gray-400 font-medium'>Happy Clients</h4>
            </div>
          
            <div className='text-center space-y-2 transform transition duration-500 hover:scale-110'>
                <img className='w-10 mx-auto' src={certificate} alt="" />
                <h2 className='text-3xl font-bold text-[#03e9f4]'>1</h2>
                <h4 className='text-xl text-gray-400 font-medium'>Certificats Earned</h4>
            </div>
          
            
        </div>
      
    );
};

export default Experience;