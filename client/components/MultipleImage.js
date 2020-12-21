import React, { useState } from 'react';
import axios from 'axios';

const MultipleImage = () => {
   const [selectedFiles, setSelectedFiles] = useState()

    const handleFileChange = (e) => {
        setSelectedFiles(e.target.files)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData() 
        for(var x = 0; x < selectedFiles.length; x++) {
        data.append('files', selectedFiles[x])
    }
    axios.post('http://localhost:4000/api/users/multiple', data)
        .then(res => console.log(res.data));
    }

    console.log(selectedFiles)
    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Profile MultipleImage :</label>
                <input name="selectedFiles" type="file" accept=".jpeg , .png , .jpg" multiple onChange={handleFileChange} />
                </div>

                <div>
                <input type="submit" value="Submit" name="Submit" />
                </div>
            </form>
        </>
    )
}
export default MultipleImage;