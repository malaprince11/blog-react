import React, {useState, useEffect} from 'react'
import './Home.css'
import Card from '../../Components/Card/Card'
import {useSelector, useDispatch} from 'react-redux'
import {getAticles} from '../../redux/articles/articleReducer'
import {v4 as uuid } from 'uuid';


function Home() {
    const {articles} = useSelector(state => ({
         ...state.articleReducer
    }))

    const dispatch = useDispatch() 

    useEffect(() => {
        if(articles.length === 0){
            dispatch(getAticles());
        
        }
    }, [])
    return (
        <>
        <h1 className="home-title"> Tout les article </h1>
        <div className='container-cards'>
        {articles.map(item => {
            return (

        <Card > 
        <h2>{item.title}</h2>
        <p>{item.body}</p>
        <a href="/">lire le suite </a>
        </Card>
            )

        })}

        </div>

            
        </>
    )
}

export default Home
