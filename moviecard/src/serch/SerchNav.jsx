import React from 'react'

const SerchNav = ({serchName,setSerchName}) => {
  return (
    <div>
        <h3>Partie recherche</h3>
        <input placeholder='the movie that you serch ' value={serchName} onChange={(e)=>setSerchName(e.target.value)} />
      
    </div>
  )
}

export default SerchNav
