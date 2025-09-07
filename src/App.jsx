
import './App.css'
import DynamicClassComponent from './components/DynamicClasscomponent/DynamicClasscomponent'
import UsersList from './components/UsersTable/UsersTable'
import Registration from './components/Registration/FormValidation'
import UseEffectTask from './components/UseEffectTask/UseEffectTask'
import Footer from './components/Footer/Footer'
import Circle from './components/Circle/Circle'
import Rest from './components/Rest/Rest'
function App() {
  
  return (
    <>
      <Registration/>
      <UseEffectTask/>
      <DynamicClassComponent/>
      <UsersList/>
      <Footer/>
      <Circle/>
      <Rest/>
    </>
  )
}

export default App
