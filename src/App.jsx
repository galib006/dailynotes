import './App.css'
import Form from './assets/Pages/Form'
import Notes from './assets/Pages/Notes'

function App() {
  return (
    <>
    <div className='p-5'>
      <h1 className='text-center text-6xl font-bold mb-8'>Daily Notes</h1>
      <div className='flex justify-between gap-2 w-full col-end-3'>
        <Form></Form>
        <Notes></Notes>
      </div>
    </div>
    </>
  )
}

export default App
