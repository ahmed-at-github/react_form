import FormComp from "./components/FormComp";
// import './App.css'

function App() {
  return (
    <>
      <h1 className="m-6 text-3xl font-extrabold text-center">
        A form for your basic information
      </h1>
      <div className="mx-[auto] min-w-[550px] max-w-[750px] border-2">
        <FormComp />
      </div>
    </>
  );
}

export default App;
