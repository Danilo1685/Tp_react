// ./components/Albums/AlbumsContainer.jsx
import { useState, useEffect } from 'react';

function AlbumsContainer() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((data) => {
        setAlbums(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando álbumes...</p>;
  if (error) return <p>Ocurrió un error al cargar los álbumes.</p>;

  return (
    <div>
      <h1>Lista de Álbumes</h1>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumsContainer;
