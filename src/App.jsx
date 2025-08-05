
import './App.css'
import DynamicClassComponent from './components/DynamicClasscomponent/DynamicClasscomponent'
import UsersList from './components/UsersTable/UsersTable'
import Registration from './components/Registration/FormValidation'
import UseEffectTask from './components/UseEffectTask/UseEffectTask'
function App() {
  
  return (
    <>
      <Registration/>
      <UseEffectTask/>
      <DynamicClassComponent/>
      <UsersList/>
    </>
  )
}

export default App
