import logo from '../assets/logo.png'
import Button from '../components/Button'
import menu from '../assets/navbar/menu-button.svg'
import close from '../assets/navbar/x.svg'
import { useState } from 'react';
import data from '../data';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="py-0 md:py-2 mb-2 sm:mb-3 flex justify-between items-center">
      <div className='flex-2/12 flex justify-content-start'>

        <img src={logo} className="h-10 md:h-12 aspect-auto object-contain me-auto" />
      </div>
        <div className="lg:flex hidden flex-10/12 justify-center items-center">
          <ul className="flex w-full justify-end items-center text-gray-500 font-bold">
            {data.navbar.map((item, i) => (
                <li key={i} className='ms-4 tracking-wider'>
                  <a href={'#' + item.id} className='text-sm px-6 py-3 rounded-lg hover:bg-[var(--primary-accent-color)] hover:text-[var(--primary-color)] transition'>
                    {item.name}
                  </a>
                </li>
            ))}
            <li className='ms-4'>
              <Button link='#contact' text="Contact us" dark={true} />
            </li>
          </ul>
        </div>

         {/* Menu Button (mobile) */}
      <div className="lg:hidden block z-50">
        <button onClick={() => setMenuOpen(!menuOpen)} className='hover:opacity-50 cursor-pointer'>
          <img src={menuOpen ? close : menu} alt="menu" className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-screen w-3/4 max-w-xs bg-white shadow-md z-40 px-6 pt-20 pb-10 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col items-start gap-6 text-end text-gray-600 font-bold">
          {data.navbar.map((item, i) => (
            <li key={i}>
              <a
                href={"#" + item.id}
                onClick={() => setMenuOpen(false)}
                className="block w-fit text-xl px-4 py-2 rounded-lg hover:bg-[var(--primary-accent-color)] hover:text-[var(--primary-color)] transition"
              >
                {item.name}
              </a>
            </li>
          ))}
          <li className='mt-5'>
            <Button link='#contact' text="Contact us" dark={true} />
          </li>
        </ul>
      </div>

      {/* Background Overlay (optional) */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
        />
      )}
    </nav>
  )
}

export default Navbar