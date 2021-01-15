import { Grid, Card, TextField, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);
  return (
    <Grid maxWidth="sm">
      <h2>CONTACT</h2>
      {success && <p style={{ color: "green" }}>Thanks for your message! </p>}
      <Card>
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <TextField id="standard-basic" label="name" name="name" />
          <TextField id="standard-basic" label="email" name="email" />
          <TextField
            multiline
            id="standard-basic"
            label="message"
            name="message"
          />
          <Button type="submit">Send</Button>
        </form>
      </Card>
    </Grid>
  );
}

export default App;
