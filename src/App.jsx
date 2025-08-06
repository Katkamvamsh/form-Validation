
import './App.css'
import DynamicClassComponent from './components/DynamicClasscomponent/DynamicClasscomponent'
import UsersList from './components/UsersTable/UsersTable'
import Registration from './components/Registration/FormValidation'
import UseEffectTask from './components/UseEffectTask/UseEffectTask'
import Footer from './components/Footer/Footer'
function App() {
  
  return (
    <>
      <Registration/>
      <UseEffectTask/>
      <DynamicClassComponent/>
      <UsersList/>
      <Footer/>
    </>
  )
}

export default App
