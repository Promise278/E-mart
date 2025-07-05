import Navbar from './Navbar'
import { Outlet } from 'react-router'
import Footer from './Footer'
import PaymentModal from '../PaymentModal'

const PageLayout = () => {
  return (
    <div className='min-h-screen grid grid-rows-[auto_1fr_auto]'>
        <Navbar />
        <Outlet />
        {/* <PaymentModal /> */}
        <Footer />
    </div>
  )
}

export default PageLayout