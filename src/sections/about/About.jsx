import AboutImage from '../../assets/about.png';
import CV from '../../assets/cv.pdf'
import { HiDownload } from "react-icons/hi";
import data from './data';
import Card from '../../components/Card';
import './about.css';

const About = () => {
  return (
    <section id="about">
     <div className="container about__container">
      <div className="about__left">
        <div className="about__portrait">
          <img src={AboutImage} alt='Imagen Acerca de'/>
        </div>
      </div>
      <div className="about__right">
      <h2>Sobre Mí</h2>
          <div className="about__cards">
          {
            data.map(item => (
              <Card key={item.id} className="about__card">
                <span className='about__card-icon'>{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>            {/*interactividad a la card */}
              </Card>
            ))
          }
          </div>
          <p>
            He realizado muy pocos proyectos por el momento, pero a mis clientes les han encantado y creo que es mi mayor satisfacción 
            hasta ahora, llevo 2 años en la industria del desarrollo web aprendiendo y poniendo en práctica mi conocimiento y esto me 
            motiva a seguir trabajando con mucho empeño y dedicación.
          </p>
          <br/>
          <p>
          Hola, mi nombre es Elkin Cobos, de Bogotá, Colombia. Soy programador junior. Mi principal prioridad es ayudarte a mejorar tu 
          negocio y colocarlo en línea de la manera correcta, brindándote un diseño estándar con todas las funciones que necesitas para 
          operar sin problemas en línea. Ponte en contacto hoy con los detalles de tu proyecto y comencemos! Mira mi currículum a continuación
          </p>
          <a href={CV} download className='btn primary'>Descarga mi C.V <HiDownload /></a>
      </div>
     </div>
    </section>
  )
}

export default About