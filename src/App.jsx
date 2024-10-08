import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Menubar } from 'primereact/menubar';
        
import MyButton from './components/Button'
import UsersContainer from './components/Users/UsersContainer' //importa el json desde UsersContainer en la carpeta User
import CreateUser from './components/Users/CreateUser';
import PostsContainer from './components/PostContainer';
import AlbumsContainer from './components/AlbumsContainer';
import Home from './components/Home'


function App() {
  const [count, setCount] = useState(0)

  const items = [
    {
      label: 'Usuarios',
      icon: 'pi pi-users',
      url: '/usuarios'
    },
    {
      label: 'Nuevo Usuario',
      icon: 'pi pi-user-plus',
      url: '/nuevo-usuario'
    },
    {
      label: 'Posts',
      icon: 'pi pi-file',
      url: '/posts'
    },
    {
      label: 'Álbumes',
      icon: 'pi pi-images',
      url: '/albums'
    },
    {
      label: 'Inicio',
      icon: 'pi pi-home',
      url: '/'
    },

  ];
  return (
    <BrowserRouter>
    <Menubar model={items} />
    <Routes>
      <Route path='/usuarios' element={<UsersContainer />} />
      <Route path='/nuevo-usuario' element={<CreateUser />} />
      <Route path='/posts' element={<PostsContainer />} />
      <Route path='/albums' element={<AlbumsContainer />} />
      <Route path='/' element={<Home />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
