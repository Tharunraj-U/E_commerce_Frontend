// src/components/ImageUpload.js

import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            alert('Please select a file first!');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:8080/image/save', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Image uploaded successfully!');
        } catch (error) {
            console.error('Error uploading the image', error);
            alert('Failed to upload image.');
        }
    };

    return (
        <div>
            <h2>Upload Image</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default ImageUpload;
