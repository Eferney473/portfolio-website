import HeaderImage from '../../assets/header.jpeg';
import data from './data';
import './header.css';

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt='Retrato de encabezado' />
        </div>
        <h3>Elkin Cobos</h3>
        <p>Crea tu sitio web o aplicación de tus sueños. Envíame los detalles de tu proyecto para un sitio web 
          moderno de alto rendimiento y escalabilidad!
        </p>
        <div className='header__cta'>
          <a href='#contact' className='btn primary'>Contáctame</a>
          <a href='#portfolio' className='btn light'>Mís trabajos</a>
        </div>
        <div className='header__socials'>
          {
            data.map(item => <a key={item.id} href={item.link} target='blank' rel='noopener noreferrer'>{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header