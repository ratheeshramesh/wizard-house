fetch('./staff.json')
  .then(response => response.json())
  .then(data => {
    const studentDetails = document.getElementById('card');
    let output = '';
    data.forEach(staff => {
      output += (`
          <div class="card-data">
          <a href='http://127.0.0.1:5501/wizard-house/profile/profile.html?id=${staff.id}'>
            <img src="/wizard-house/images/frame.png" class="card-img-bottom" alt="frame">
            <div class="card-body">
            <img src="${staff.image}" class="card-img-top"  alt=${staff.name}>
              <div class="card-title">${staff.name}</div>
            </div>
            </a>
          </div>
      `);
    });
    studentDetails.innerHTML = output;
  })
  .catch(error => console.error(error));