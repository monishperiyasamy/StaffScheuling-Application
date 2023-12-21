import React, { useEffect, useState } from 'react';
import '../Assets/Frequently.css';
import { useNavigate } from 'react-router-dom';

const faqData = [
  {
    question: 'What is this staff scheduling application?',
    answer: 'This is a web application designed to help businesses and organizations efficiently schedule their staff members.'
  },
  {
    question: 'How do I request time off?',
    answer: 'You can request time off by logging into the staff scheduling system and submitting a time-off request. Make sure to provide the dates and reasons for your request.'
  },
  {
    question: 'What if I need to swap shifts with a coworker?',
    answer: 'To swap shifts with a coworker, you should first discuss the swap with them and get their agreement. Then, inform your supervisor and follow the shift swapping procedure in the scheduling system.'
  },
  {
    question: 'Can I view my schedule in advance?',
    answer: 'Yes, you can view your schedule in advance by logging into the staff scheduling system. Schedules are typically posted a few weeks in advance.'
  },
  {
    question: 'How do I report a scheduling conflict?',
    answer: 'If you encounter a scheduling conflict, contact your supervisor as soon as possible. They will assist in resolving the conflict and making necessary adjustments.'
  },
  {
    question: 'Can I set my preferred working hours?',
    answer: 'Yes, you can set your preferred working hours in your profile settings. Please make sure to update your preferences, and the scheduling system will try to accommodate your preferred hours when creating the schedule.'
  },
  {
    question: 'What if I am unable to work my scheduled shift?',
    answer: 'If you are unable to work your scheduled shift due to unexpected circumstances, contact your supervisor as soon as possible. They will assist in finding a replacement or making necessary adjustments to the schedule.'
  },
  {
    question: 'Can I request a specific shift or location?',
    answer: 'Yes, you can request a specific shift or location preference in your profile settings. While we try to accommodate preferences, it is not always guaranteed. We consider these requests when creating the schedule, but operational needs may sometimes take precedence.'
  },
  {
    question: 'How often is the schedule updated?',
    answer: 'The schedule is typically updated on a weekly basis. Any changes to your shifts or working hours will be reflected in the updated schedule. Make sure to check the system regularly for the most recent schedule information.'
  },
  {
    question: 'What do I do if I notice an error in my schedule?',
    answer: 'If you notice an error in your schedule, such as incorrect shifts or hours, please report it to your supervisor immediately. They will investigate the issue and make necessary corrections to ensure accuracy.'
  },
  {
    question: 'Is there a minimum number of hours I need to work each week?',
    answer: 'The minimum number of hours you need to work each week depends on your employment contract and company policies. Refer to your contract or employee handbook for information about your minimum weekly hours. If you have specific questions, contact your HR department.'
},

  // Add more FAQ items as needed
];

const Frequently = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

//   const nav=useNavigate();
//   const token=localStorage.getItem("jwtToken")
//   if(token===null){
//     nav("/")
   
//   }
//   const [user, setuser] = useState([]);
//   useEffect(() => {
//     const storeduser = JSON.parse(localStorage.getItem('userData')) || [];
//     setuser(storeduser);
// },[]);

  return (
    <div className="sfaq-container">
      <h1>Frequently Asked Questions</h1>
      {faqData.map((item, index) => (
        <div className={`sfaq-item`} key={index}>
          <div className={`sfaq-question ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleFAQ(index)}>
            {item.question}
          </div>
          <div className={`sfaq-answer ${activeIndex === index ? 'active' : ''}`}>
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Frequently;
