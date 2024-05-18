import Form from './components/form';
import Posts from './components/posts';

const App = () => {
  return (
    <div className="flex  w-full px-6 mx-auto gap-4">
      <Posts />
      <Form />
    </div>
  );
};

export default App;
