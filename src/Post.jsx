import React,{ useState, useEffect } from 'react';
import { BsPersonCircle } from 'react-icons/bs'


function Post(props) {
    const data = props.value
    const id = data.postId
    const imageUrl = `/api/v1/image/${id}`
    const tagUrl = '/api/v1/image-classifier'
    const [img, setImg] = useState();
    const [tag, setTag] = useState();

    async function fetchImage() {
        const image = await fetch(imageUrl)
        const imageBlob = await image.blob()
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImg(imageObjectURL);
    }

    async function fetchTags() {
        const response = await fetch(tagUrl)
        const tagList = await response.json()
        const tagData = tagList[id]
        setTag(tagData.label)
    }

    useEffect(() => {
        fetchImage()
        fetchTags()
      }, []);

    return(
        <div className='post'>
            <div className="bar">
                <div className="pfp">
                    <BsPersonCircle/>
                </div>
                <h2 className='user'>{data.user}</h2>
            </div>
            <div className="photo">
                <img src={img} alt="error"/>
                <div className='overlay'>{tag}</div>
                <div className='overlay'>{tag}</div>
            </div>
        </div>
    )
}

export default Post