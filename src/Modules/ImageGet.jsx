// src/components/ImageDisplay.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageDisplay = ({ imageId }) => {
    const [image, setImage] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/image/get/${imageId}`, {
                    responseType: 'blob', // Expect a blob response
                });

                const contentType = response.headers['content-type'];
                const reader = new FileReader();

                reader.onloadend = () => {
                    const base64String = reader.result;
                    setImage(`data:${contentType};base64,${base64String.split(',')[1]}`);
                };

                reader.readAsDataURL(response.data); // Convert blob to base64
            } catch (error) {
                console.error('Error fetching the image', error);
            }
        };

        if (imageId) {
            fetchImage();
        }
    }, [imageId]);

    return (
        <div>
            <h2>Display Image</h2>
            {image ? <img src={image} alt="Uploaded" /> : <p>Loading image...</p>}
        </div>
    );
};

export default ImageDisplay;
