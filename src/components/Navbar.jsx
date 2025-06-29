import { Link } from 'react-router-dom'
import '../pages/Shop.css'

function Navbar({ money }) {
  return (
    <nav className='header'>
      <Link to="/">Главная</Link>
      <Link to="/shop">Каталог</Link>
      <Link to="/basket">Корзина</Link>
      <Link to="/about">О нас</Link>
      <div style={{ display: 'flex', marginLeft: "auto", flexWrap: 'nowrap'}}>
        <span style={{ fontFamily: 'Cyrillic Old', marginRight: '40px' }}> {money} ₼ </span>
        <a href='https://www.youtube.com' > <img src='./images/YouTube.png' style={{ width: "40px" }} title='Да нахуй этот сайт пашли ютубчик глянем' /></a>
      </div>

    </nav>
  )
}

export default Navbar