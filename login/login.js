function verifyUser(username, password) {
    var url = 'https://randomuser.me/api/?result=1';
    fetch(url)
      .then(login => login.json())
      .then(data => {
        if (data.results && data.results.length > 0) {
          var user_data = data.results[0].login;
          if (user_data.username === username && user_data.password === password) {
            // User verified
            console.log('Login successful!');
          } else {
            // Invalid credentials
            console.log('Invalid username or password!');
          }
        } else {
          // Error in API response
          console.log('Error in API response!');
        }
      })
      .catch(error => {
        // Error in API request
        console.log('Error in API request!');
      });
  }
  