import './App.css'
import { atom, RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { todoAtomFamily } from './atoms'
import { useEffect } from 'react';


function App() {

  return (
    <RecoilRoot>
      <UpdateTodoComponent />
      <Todo id={1} />
      <Todo  id={2}/>
    </RecoilRoot>
  )
}

function UpdateTodoComponent() { //updating the todo with id 2 after 5 seconds 
  const updateTodo = useSetRecoilState(todoAtomFamily(2)); //getting the atom with id 2

  useEffect(() => {
    setTimeout(() => {
      updateTodo({
        id : 2,
        title : "new todo",
        description : "desc of new todo"
      })
    }, 5000);
  },[]);

}

function Todo({id}) {

  const currenttodo = useRecoilValue(todoAtomFamily(id)); //what it will do is that it will show the todos with the todo with the id that the componenet with the id wants in the app function


  return (
    <div>
      {currenttodo.title}
      {currenttodo.description}
    </div>
  )
}

export default App
