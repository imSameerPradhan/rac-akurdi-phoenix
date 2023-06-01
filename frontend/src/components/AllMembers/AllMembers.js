import React, { useEffect, useState } from 'react'
import TeamDetail from '../home/TeamDetail';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AllMembers() {
    
 const[nonLeader,setNonLeader]= useState([]);


 const[Leader,setLeader]= useState([]);

const navigate =useNavigate();


  useEffect(()=>{
    async function getLeader() {
       const res =await axios.get('http://localhost:8000/user/getMember',{params:{isLeader:true},headers:{"x-api-key":1234567890123456}});
       setLeader(res.data)    
     }
   
     getLeader();
     },[]);


 useEffect(()=>{
    async function getNonLeader() {
       const res =await axios.get('http://localhost:8000/user/getMember',{params:{isLeader:false},headers:{"x-api-key":1234567890123456}});
       setNonLeader(res.data)    
     }
   
     getNonLeader();
     },[]);
  return (
    <div className="team flex-col" id="team">


<div className='flex-col'>

    
<p>Our community Leaders</p>

        {Leader?.map((teamsDetail) => (
            
              <TeamDetail teamsDetail={teamsDetail} key={teamsDetail._key} />
            ))}



</div>
<div className='flex-col'>
<p>Our community members</p>

        {nonLeader?.map((teamsDetail) => (
            
              <TeamDetail teamsDetail={teamsDetail} key={teamsDetail._key} />
            ))}
    </div>
    </div>
  )
}

export default AllMembers