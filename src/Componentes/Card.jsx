import React from 'react'

export default function Card(props) {
    return (
        <div className={props.className} >

            <div className="big-div">
                <span className='div-title'>
                    {props.title}
                </span>
                <br />
                <span>
                    {props.description}
                </span>
                <button className='buttonCard'>PEGAR MEU INGRESSO</button>
            </div>

            <div className="small-div">
                <i className={props.className}></i>
                <img src="../images/laraHome.PNG" alt='' />
            </div>

            
        </div>
    )
}