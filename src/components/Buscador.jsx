import React, { useState } from 'react'


function Buscador({onSubmit}) {
  const [quest, setQuest] = useState('');

  const handleChange = (e) =>{
    setQuest(e.target.value);
  };

    const handleSubmit = (e) =>{
    e.preventDefault();
    onSubmit(quest);
  }

  return (
    
    <div className="container">
      <form onSubmit={handleSubmit}>
      <div className='input-group mb-3 mx-auto'>
          <input type="text" 
                  className='form-control' 
                  placeholder='Ingresa una palabra' 
                  onChange={handleChange}
                  value={quest}/>
                  
          <button className='btn btn-primary input-group-text' type='submit'>Buscar</button>        
        </div>
      </form>
    </div>
  
  )
}

export default Buscador