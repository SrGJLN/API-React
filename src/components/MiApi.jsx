import React from 'react'
import { useEffect, useState } from 'react';

const MiApi = ({filterValue}) => {

  const [data, setData] = useState([])

  const apiKey = 'vFnzPYtUyxLGu22K3rl3A1nNTan8EeQ0Lk1ny6AQUII'
  const url = `https://api.unsplash.com/search/photos/?client_id=${apiKey}&query=${filterValue}`

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result.results);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };

    if (filterValue !== '') {
      fetchData();
    }
  }, [filterValue]);

  return (

    <main className='container'>
    <div className='row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3'>

        {data.map(e =>(

        <div className='col mt-5 cardT' key={e.id}>
            <div className='card mt-3 border-light' style={{ width: '18rem' }}>
                <img src={`${e.urls.small_s3}`}
                            className='card-img-top' alt='{e.name}'
                            style={{width:'18rem', height:'15rem'}}/>
                    <div className='card-body'>
                        <h5 className='card-title'>{e.user.name}</h5>
                    </div>
            </div>
        </div>
        ))
        }

    </div>
    </main>
  )
}

export default MiApi