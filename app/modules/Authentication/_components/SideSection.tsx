import img from '../../../../public/images/auth-side-section.png'
import logo from '../../../../public/images/logo.jpg'
import appstore from '../../../../public/images/appstore.png'
import googleplay from '../../../../public/images/googleplay.png'

export function SideSection() {
  return (
    <div className="h-screen bg-mainPink w-1/3 flex flex-col">
      <div className='flex-1 p-8'>
        <img className='w-48 mb-4' alt='logo' src={logo} />
        
        <p className='font-bold text-7xl'>Vendre et acheter plus facilement.</p>

        <div className='flex items-center justify-evenly mt-12 mx-32'>
          <img className='w-32 h-10' alt='appstore' src={appstore} />
          <img className='w-32 h-11' alt='googleplay' src={googleplay} />
        </div>

      </div>

      <img className='p-20' alt='auth-side-section' src={img} />
    </div>
  )
}