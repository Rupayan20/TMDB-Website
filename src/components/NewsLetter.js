import React,{useState,useEffect} from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import './NewsLetter.css';
import axios from 'axios';

const NewsLetter = () => {

  const [email,setEmail]=useState('');

  const sendMail=async (e)=>{
       e.preventDefault();

       //using regular expression to check whether the email is valid or not
       var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

       if (!filter.test(email)) {
           alert('Please provide a valid email address');
           
           return false;
       }
       else{
           const responce=await axios.post("https://iem-project-858df-default-rtdb.firebaseio.com/firebase.json",{email});
           if(responce){
             alert('We received your responce');
           }

           setEmail('')
       }

  }
  
  return (
    <>
      <div className='newsletter my-5'>
        <div className='container py-5'>
            <div className='contents '>
            <h1>Subscribe to Newsletter</h1>
            <p>Subscribe to our newsletter to receive early discount offers, new templates info and updates. </p>
            <br/>
            <div className='input'><HiOutlineMail/><input type="" placeholder='Enter your Email' onChange={(event)=>{
              setEmail(event.target.value);
            }} value={email}/><button onClick={sendMail}>Subscribe*</button></div>
        </div>
        </div>
      </div>
    </>
  )
}

export default NewsLetter
