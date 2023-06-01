import React, { useRef, useState } from 'react'
import 'firebase/storage';
import { storage } from '../../firebase';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import axios from 'axios';

function AddUser() {
    // fullname, desc, image, post,isLeader
    const [name, setName] = useState()
 const [desc, setDesc] = useState()
 const [post, setPost] = useState()
 const [isLeader, setIsLeader] = useState(false);
 const [selectedFile, setSelectedFile] = useState(null);

 const handleCheckboxChange = (e) => {
    setIsLeader(e.target.checked);
  };

 const imageRef =useRef();
 const handleUploadClick = () => {
    if (imageRef.current) {
      imageRef.current.click();
    }
  };
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

  };


  function handleSubmit() {
    
    const storageRef = ref(storage, `files/${selectedFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, selectedFile);

    uploadTask.on('state_changed',
        (snapshot) => {
            const progress =
        Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        },
        (error) => {
            alert(error);
        },
         () => {
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {                
console.log(downloadURL);
const body={
    fullname:name, desc, image:downloadURL, post,isLeader
}

            axios.post('http://localhost:8000/user/addMember',body,{headers:{
                "x-api-key":1234567890123456
            }})
            });


        }
    );


}
 return (
    <div>

        <input value={name} onChange={(e)=>setName(e.target.value)} placeholder='name'  />
        <input value={desc} onChange={(e)=>setDesc(e.target.value)} placeholder='Description'  />
        <input value={post} onChange={(e)=>setPost(e.target.value)} placeholder='Post'  />
        <input
          type="checkbox"
          checked={isLeader}
          onChange={handleCheckboxChange}
        />
<input type="file" onChange={handleFileChange} style={{ display: 'none' }} ref={imageRef} />
      <div onClick={handleUploadClick}>Upload Image</div>


<div onClick={handleSubmit}>Add</div>

        </div>
  )
}

export default AddUser