import React from 'react';
import ListItem from './ListItem';

const List = ({data}) => {
    const renderedList =  data.map((data) => {
        return <ListItem data={data}/>
    });
	return <div className='ui relaxed divided list'>{renderedList}</div>;
};
export default List;