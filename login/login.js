function validate(event) {
    event.preventDefault();
	// Get the input values

	var usernamei = document.getElementById("username").value;
	var passwordi = document.getElementById("password").value;
	
    fetch('login.json')
    .then(response => response.json())
    .then(data => {
    const user = data.results[0];
    const username = user.login.username;
    const password = user.login.password;
    console.log(username+" "+password);
    
    if(usernamei===username && password===passwordi){
        window.location.href="http://127.0.0.1:5501/wizard-house/student/student.html";
    }
    else {
        alert('Invalid username or password');
      }
    
  })
  .catch(error => console.error(error));
	
}
