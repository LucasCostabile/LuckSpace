import React from 'react'
import style from './Tags.module.scss'
import fotos from '../Galeria/fotos.json'

export default function Tags({tags, filtraFoto, setItens}) {  
  return (
    <div className={style.tags}>
      <p className={style.tags__p}>Filtre por tags:</p>
      <ul className={style.tags__lista}>
         {tags.map((tag) => {
          return <li key={tag} onClick={() => filtraFoto(tag)}>{tag}</li>;
         })}
         <li onClick={()=> setItens(fotos)}>Todas</li>
      </ul>

    </div>
  )
}
