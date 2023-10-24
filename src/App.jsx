import 'bootstrap/dist/css/bootstrap.css'
import List from './compentes/List'


function App(props) {

 
 
  return (
    <>
  <List items={['United States','Australia','Canada']}  title="Country"/>
  <List items={['Jacket' ,'Dress' ,'Jeans']}  title="clothes"/>
    </>
  )
}

export default App
