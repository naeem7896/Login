import React from 'react';

function App() {
  return (
    <div className="App">
    	<form>
    		<input type="text" name="name" placeholder="Full name*" /><br /><br />
    		<input type="password" name="password" placeholder="Password*" /><br /><br />
    		<button type="submit">Submit</button>
    	</form>
    </div>
  );
}

export default App;
