import logo from '../assets/logo-white.png'
import call from '../assets/call-outbound.svg'
import Suscription from '../components/Suscription'
import { useRef } from 'react';
import animationData from "../assets/calling.json"
import Lottie from 'lottie-react';

function Footer() {
  const lottieRef = useRef();
  return (
    <footer>
      <div className="bg-[var(--primary-color)] p-2 rounded-4xl">
        <div className="relative z-10 text-white rounded-3xl h-full border-2 border-[var(--secondary-color)] p-4 sm:p-6 md:p-10 pb-12">
           
            <div className="flex justify-between gap-4 items-center pb-5 border-b border-b-neutral-300">
              <div className="flex flex-col gap-2.5 lg:gap-3.5">
                <h3 className="text-white uppercase text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold tracking-wider">ready to work with us?</h3>
                <p className="hidden sm:block text-gray-200 text-[10px] md:text-xs lg:text-sm leading-5 max-w-[250px] md:max-w-lg lg:max-w-full">Experience top-notch customer care service and let us guide you on your property journey.</p>
              </div>
              <a href="tel:+2349067043359">
                <div
                  onMouseEnter={() => lottieRef.current.play()}
                  onMouseLeave={() => lottieRef.current.stop()}
                  className="relative min-h-full flex justify-center items-center w-[90px] md:w-[100px] lg:w-[120px] aspect-square rounded-full bg-[var(--secondary-color)] ring ring-offset-[5px] lg:ring-offset-[6px] ring-inset ring-offset-[var(--secondary-color)] cursor-pointer hover:bg-[var(--secondary-accent-color)] hover:ring-offset-[var(--secondary-accent-color)]"> 
                    <Lottie
                      lottieRef={lottieRef}
                      animationData={animationData}
                      loop={true}
                      autoplay={false}
                      className='w-12 md:w-14 lg:w-16 absolute translate-middle'
                    /> 
                </div>
              </a>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-x-8 mt-10">
              <div className="flex flex-col gap-4">
                <img src={logo} className='w-36 md:w-48' alt="" />
                <p className="text-neutral-300 text-xs max-w-lg tracking-wider leading-5">
                  A cutting-edge real estate agent that offers a seamless
                  and immersive experience for finding your dream home.
                </p>
                <div className="flex flex-col sm:flex-row gap-y-2 sm:gap-0 justify-between mt-2">
                  <div className="flex items-center gap-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 aspect-square text-gray-300" viewBox="0 0 16 16">
                       <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                       <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                    </svg>
                    <span className="text-neutral-300 font-semibold text-xs tracking-widest">08067043359</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 aspect-square text-gray-300" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                    </svg>
                     <span className="text-neutral-300 font-semibold text-xs tracking-widest">maxbillion@gmail.com</span>
                  </div>
                </div>
              </div>
              <Suscription />
            </div>

            <div className="flex justify-between mt-12">
              <span className="text-sm text-neutral-300">@2025. All rights reserved</span>
              <div className="flex items-center justify-between gap-7 max-w-xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-facebook text-white cursor-pointer hover:text-[var(--secondary-accent-color)] w-5 aspect-square" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-whatsapp text-white cursor-pointer hover:text-[var(--secondary-accent-color)] w-5 aspect-square" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-google text-white cursor-pointer hover:text-[var(--secondary-accent-color)] w-5 aspect-square" viewBox="0 0 16 16">
                    <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
                </svg>
              </div>
            </div>
            
        </div>
    </div>
    </footer>
  )
}

export default Footer