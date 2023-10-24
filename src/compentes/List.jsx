import React from 'react'

const List = (props) => {

    return (
        <>
            <h2>{props.title}</h2>
            {props.items.length==0 ? <h3>No List</h3> : null}

            <ul className="list-group">
             
             {props.items.map(item =>(
                <li key={item}     className='list-group-item'>{item}</li>
                ))}


            </ul>

        </>

       
    )
}

export default List