import './navbar.css'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("loggedin")
        navigate('/login')
    }

  return (
    <nav className="bg-blue-500 fixed top-0 left-0 right-0 flex justify-between items-center px-5 py-2 text-white z-50">
        <div className="cursor-pointer flex flex-col justify-between w-20 h-20 items-center">
            <div className="menu-line   w-full h-3 bg-white rounded-md"></div>
            <div className="menu-line   w-full h-3 bg-white rounded-md"></div>
            <div className="menu-line   w-full h-3 bg-white rounded-md"></div>
        </div>
        <div className="navbar-left">
            <span className=" text-2xl">SSMU</span>
        </div>
        <div className="navbar-center">
            <input
            type="text"
            placeholder="Buscar en SSMU"
            className="    search-bar    w-72 p-2 pl-10 bg-gray-300 rounded-lg text-base bg-no-repeat bg-center bg-lupa"
            />
        </div>
        <div className="navbar-right flex mr-10">
            <img
                src='/src/assets/colombia.png'
                alt="Bandera de Colombia"
                className="flag-icon   w-30 h-30 ml-10 cursor-pointer"
            />
            <div className='    dropdown inline-block relative'>
                <img
                    src='/src/assets/perfilUsuario.png'
                    alt="foto de perfil"
                    className='profile-icon   w-30 h-30 ml-10 cursor-pointer'
                />
                <div className="     dropdown-content hidden absolute w-500 overflow-auto shadow-md pr-12 rounded-2xl">
                    <Link className='block text-black p-2 no-underline hover:text-white hover:bg-blue-500' to="/">Información de la cuenta</Link>
                    <button className='rounded-none border-none p-10% text-lg font-semibold font-inherit bg-transparent text-red-500 cursor-pointer transition-none hover:text-white hover:bg-blue-500' onClick={handleLogout}>Cerrar sesión</button>
                </div>
            </div>
            
        </div>
    </nav>
  )
}
