import React, { useState } from 'react';
import Card from './Components/Card';

function App() {
  const [search, setSearch] = useState('');
  const [photos, setPhotos] = useState([]);
  const open = url => window.open(url);

  const fetchData = async () => {
    const response = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${search}`, {
      headers: {
        'Authorization': 'Client-ID 1WXPB7ZPopKfIPyeNYKBt9njfvQDVgwxUz3FZzVX9nM'
      }
    });
    const data = await response.json();

    // Limita las imágenes a las primeras 10
    const limitedPhotos = data.results.slice(0, 12);
    setPhotos(limitedPhotos);
  };

  return (
    <div className="container text-center">
      <header>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className='m-2'
        />
        <button onClick={fetchData}>Search</button>
      </header>
      <div className="container">
        <div className="row">
          {photos.map(photo => 
            <div className="col" key={photo.id}>
              <Card
                image={photo.urls.regular}
                title={[photo.description, photo.alt_description].join(' - ')}
                description="Este es un ejemplo de tarjeta para presentar imágenes de forma dinámica."
                buttonText="Cambia"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
