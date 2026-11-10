import { useState } from 'react'
import reactLogo from './assets/react.svg'
import liTexto from './assets/li_texto.svg'
import Lilogo from './Lilogo'
import LilogoDegradado from './assets/li_solutions_logoDegradado.svg'
import './App.css'
import './liCSS.css'
import  PresentationB from './Presentasion'
import FondoOnda from './FondoOnda'

function App() {  
  const [mostrarPresentacion, setMostrarPresentacion] = useState(false);
  return (
    <>

      <section id="center">     
        <FondoOnda>           
        {<div className='centrado' >
          <table>
            <tbody>
              <tr>
                <div className='lilogoDiv'>
                  <Lilogo/>
                </div>
              </tr>        
              <tr>
                <div className='liTextoBlanco'><img src={liTexto} alt="li Solutions" className='framework' height={250}/></div>                
              </tr>
              <tr>
                <p>
                  Soluciones a tu alcance.
                </p>
              </tr>                                
            </tbody>
          </table>
        </div>      }          
        </FondoOnda>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Conocenos</h2>
          <p>Conoce mas acerca de nosotros</p>
          <ul>
            <li>
              <a target="_blank" onClick={() => setMostrarPresentacion(!mostrarPresentacion)}>                
                <img className="logo" src={LilogoDegradado} alt="" />
                Acerca de nosotros.
              </a>
              {mostrarPresentacion && <PresentationB />}              
            </li>
            <li>
              <a href="" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Fundadores
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
