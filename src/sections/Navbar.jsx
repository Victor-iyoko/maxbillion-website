import logo from '../assets/logo.png'
import Button from '../components/Button'

function Navbar() {

  return (
    <nav className="py-2 mb-7 flex">
        <img src={logo} className="w-4 flex-2/12 aspect-auto" />
        <div className="flex flex-10/12 justify-center items-center">
          <ul className="flex w-full justify-end items-center text-gray-500 font-bold">
            <li className='ms-4 tracking-wider'>
              <a href="#" className='text-sm px-6 py-3 rounded-lg hover:bg-[var(--primary-accent-color)] hover:text-[var(--primary-color)] transition'>Home</a>
            </li>
             <li className='ms-4 tracking-wider'>
              <a href="#" className='text-sm px-6 py-3 rounded-lg hover:bg-[var(--primary-accent-color)] hover:text-[var(--primary-color)] transition'>Services</a>
            </li>
             <li className='ms-4 tracking-wider'>
              <a href="#" className='text-sm px-6 py-3 rounded-lg hover:bg-[var(--primary-accent-color)] hover:text-[var(--primary-color)] transition'>About</a>
            </li>
              <li className='ms-4 tracking-wider'>
              <a href="#" className='text-sm px-6 py-3 rounded-lg hover:bg-[var(--primary-accent-color)] hover:text-[var(--primary-color)] transition'>How to get started</a>
            </li>
            <li className='ms-4'>
              <Button text="Contact us" dark={true} />
            </li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar