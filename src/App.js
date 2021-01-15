import "./App.css";

function App() {
  return (
    <div>
      <form name="contact" method="POST" data-netlify="true" onSubmit="submit">
        <input type="text" name="name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
