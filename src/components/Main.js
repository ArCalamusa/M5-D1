import React from 'react'
import '../styles/Main.css'
import { cardsData } from '../data/cards'
import img_avatar from '../assets/img_avatar.png'
// console.log(cardsData);

const Main = () => {
    return (
        <div>
            {
                cardsData.map((card) =>{
                    return (
                        <>
                        <div className="cardContainer">
                            <div className="card">
                                <img src={img_avatar} alt="Avatar" style={{width:"100%"}}/>
                                    <div className="container">
                                        <p className="text-title">{card.title}</p>
                                        <p className="text-body">{card.description}</p>
                                    </div>
                            </div>
                        </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Main