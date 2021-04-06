import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './Form.css'
function Form() {
    const [article,setArticle] = useState({
        title:"",
        body:""
    })
    const dispatch = useDispatch()

const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = {
        title: article.title,
        body: article.body
    }
    dispatch({
        type:"ADDARTICLE",
        payload: article
    })
    setArticle({
        title:"",
        body:""
    })

}

const addTitle = (e) =>{
const newObjState = {...article, title: e.target.value}
 setArticle(newObjState)
}


const addBody = (e) =>{
    const newObjState = {...article, body: e.target.value}
    setArticle(newObjState)
   }


    return (
        <>
        <h1 className="title-form">Ecrivez votre article</h1>
            <form 
            onSubmit={handleSubmit}
            className="container-form">
            <label htmlFor="title">Titre</label>
            <input
            value={article.title}
            onInput={addTitle}
            type="text"
            id="title"
            placeholder="Entrez le titre de votre article" />
            <label htmlFor="article">Ecrivez votre article </label>
            <textarea
            value={article.body}
            onInput={addBody}
             id="" 
            placeholder="ecrivez ici ..."></textarea>
            <button>Envoyez article</button>

            </form>
        </>
    )
}

export default Form
