import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import Ai from "./Ai"
import React, { useState, useEffect } from 'react';

const AIs = () => {
    const id = 6
    const [img, setImg] = useState()

    useEffect(() => {
      const imageUrl = `/api/v1/image/${id}`
      const fetchImage = async () => {
        const image = await fetch(imageUrl)
        const imageBlob = await image.blob()
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImg(imageObjectURL);
      }
      fetchImage()
    }, [])

      //Smoke and mirrors. TODO: get images one by one and pass to Ai component
    const [data] = useState([{name : 'Yutaro Katori', image : "https://i.kym-cdn.com/entries/icons/original/000/017/299/DmbzJspWwAEprcQ.jpg"}, {name : 'Agent Smith', image : {img}},  {name : 'John Lennon'},
     {name: 'George Harrison'}, {name: 'Ringo Starr'},
     {name: 'Paul McCartney'}, {name: 'George Martin'},
     {name: 'Artem D'}, {name: 'Friendly Henry'},
     {name: 'Daniel Oh'}, {name: 'Avni Mungra'}])
      
  return (
    <Row gutter={40}>
    {(data).map(data => 
      <Col 
        xs={{ span: 7 }} sm={{ span: 5 }} md={{ span: 4 }}
        lg={{ span: 4 }} xl={{ span: 4 }} >
          <Ai value={data.name}  image={data.image}/>
        </Col>
    )}
  </Row>
  );
}

export default AIs;