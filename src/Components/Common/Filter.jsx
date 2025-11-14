import React from 'react';
import P from '../Common/P';
import './Filter.css';

const Filter = (props) => {
    return (  <>
    <div className='filter'>
    <P title={props.title} />
    </div>
    </>);
}
 
export default Filter;