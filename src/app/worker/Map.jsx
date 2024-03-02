import React from 'react'

const page = (props) => {
 
    const handleClick = () => {
      const url = `https://www.google.com/maps?q=${props.latitude},${props.longitude}`;
      window.open(url, '_blank');
    };
  return (
    <div>
      <button onClick={handleClick}>Open in Google Maps</button>
    </div>
  )
}

export default page
