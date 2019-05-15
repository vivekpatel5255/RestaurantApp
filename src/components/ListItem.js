import React from 'react';
import '../style/main.css';

const ListItem = ({data , handleVideoSelect}) => {
    return (
        <div className=' list-item item'>
            <img className='ui image' src={data.image_url} alt={data.name}/>
            <div className='content'>
                <div className='name'>Name: {data.name}</div>
				<div className='address'>Address: {data.address}</div>
				<div className='header '> Price: ${data.price}</div>
            </div>
        </div>
    )
};
export default ListItem;