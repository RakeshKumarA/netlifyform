import "./App.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function App() {
  return (
    <div>
      <form name="contact" method="POST" data-netlify="true" onSubmit="submit">
        <TextField label="Name" type="text" name="name" />
        <Button variant="contained" color="default" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default App;
