import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function MyAccount() {

  const navigate = useNavigate(); 

  // a local state to store the currently selected file.
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleSubmit = async(event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("selectedFile", selectedFile);
    try {
      const response = await axios({
        method: "post",
        url: "/myacount/upload-file",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch(error) {
      console.log(error)
    }
  }

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }

  return (
    <div className="myaccount">
      <h1> My Account </h1> 
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleFileSelect}/>
          <input type="submit" value="Upload File" />
        </form>
      
      <button onClick={() => navigate("/login")}> Log Out </button>
    </div>
  );
}