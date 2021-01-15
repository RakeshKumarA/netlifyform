import "./App.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function App() {
  return (
    <div>
      <form name="contact" method="POST" data-netlify="true">
        <TextField label="Name" type="text" />
        <Button variant="contained" color="default">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default App;
