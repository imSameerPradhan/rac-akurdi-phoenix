import React, { useRef, useState } from 'react'
import 'firebase/storage';
import { storage } from '../../firebase';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import axios from 'axios';
// title,
//     desc,
//     image,
//     fullDesc,
//     eventDate,
//     eventURL,
function AddEvent() {
    const [name, setName] = useState()
    const [desc, setDesc] = useState()
    const [fullDesc, setFullDesc] = useState();

const [date, setDate] = useState()
const [link, setLink] = useState();

const [selectedFile, setSelectedFile] = useState(null);

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
    title:name,
    desc,
    image:downloadURL,
    fullDesc,
    eventDate:date,
    eventURL:link,
}

            axios.post('http://localhost:8000/events/addEvent',body,{headers:{
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
        <textarea value={fullDesc} onChange={(e)=>setFullDesc(e.target.value)} placeholder='Full Desc'  />
        <input type='date'  value={date} onChange={(e)=>setDate(e.target.value)} />
        <input value={link} onChange={(e)=>setLink(e.target.value)} placeholder='Event link'  />

<input type="file" onChange={handleFileChange} style={{ display: 'none' }} ref={imageRef} />
      <div onClick={handleUploadClick}>Upload Image</div>


<div onClick={handleSubmit}>Add</div>

        </div>
  )
}

export default AddEvent