fetch('./staff.json')
  .then(response => response.json())
  .then(data => {
    const studentDetails = document.getElementById('card');
    let output = '';
    data.forEach(staff => {
      output += (`
          <div class="card-data">
            <img src="/wizard-house/images/frame.png" class="card-img-bottom" alt="frame">
            <div class="card-body">
            <img src="${staff.image}" class="card-img-top"  alt="${staff.name}">
              <div class="card-title">${staff.name}</div>
            </div>
          </div>
      `);
    });
    studentDetails.innerHTML = output;
  })
  .catch(error => console.error(error));