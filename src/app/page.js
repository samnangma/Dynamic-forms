import Navbar from '@/components/Navbar';
import DynamicForm from '../components/DynamicForm'
import formSchema from '../schemas/formSchema.json';

export default function Home() {
  return (
    <div>
    <Navbar></Navbar>
    <DynamicForm schema={formSchema} />
  </div>
  )
}
