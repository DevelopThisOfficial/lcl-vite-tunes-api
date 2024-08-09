import { useEffect, useState } from 'react'


const ApiCallCard = () => {
    const baseUrl = `https://dojo.navyladyveteran.com/characters/`
    const [tunes, setTunes] = useState([])

    useEffect(() => {
        fetch(baseUrl)
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log('the data', data)
            setTunes(data)
        })
    }, [])
    
    console.log('what is setTunes', tunes[0].name)

    return(
        <>
          <div className="row">
            {tunes.map(t => (
                <div key={t.id} className='tune'>
                    <img src={t.img} alt={t.name} />
                    <h3>{t.name}</h3>
                </div>
            ))} 
          </div> 
        </>
    )
}

export default ApiCallCard