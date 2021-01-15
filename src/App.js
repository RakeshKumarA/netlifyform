import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <form name="contact" method="post" data-netlify="true" onSubmit="submit">
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
