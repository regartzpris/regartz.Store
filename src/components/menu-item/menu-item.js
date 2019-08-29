import React from 'react';
import {withRouter} from 'react-router-dom'; //You can get access to the history object’s properties and the closest <Route>'s match via the withRouter higher-order component. withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.



import '../menu-item/menu-item.styles.scss'


const MenuItem = ({ title, imageUrl, size,history,linkUrl,match}) => (
    // javascript template string 
    <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />

        <div className='content'>
            <h1 className='title'>{title.toUpperCase()} </h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>

    </div>

)



export default withRouter (MenuItem); 
// pass MenuItem component in to withRouter and return with same name export default so have access to location match,and history props
// HOC= a higher-order component is a function that takes a component as argument, transforms it into another component and returns that transform component out of it self