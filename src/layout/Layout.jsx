
import { Outlet } from 'react-router-dom'
import Container from '../Commponents/Container'
import NavigationBar from '../Commponents/NavigationBar'
import NotificationBar from '../Commponents/NotificationBar'
import Footer from '../Commponents/Footer'

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen'>

      <NotificationBar/>
      <NavigationBar/>

      <Container className='grow py-6'>
        <Outlet/>
      </Container>

      <Footer/>

    </div>
  )
}

export default Layout