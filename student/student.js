fetch('./student.json')
  .then(response => response.json())
  .then(data => {
    const studentDetails = document.getElementById('card');
    let output = '';
    data.forEach(stud => {
      output += (`
          <div class="card-data">
            <img src="/wizard-house/images/frame.png" class="card-img-bottom" alt="frame">
            <div class="card-body">
            <img src="${stud.image}" class="card-img-top"  alt="${stud.name}">
              <div class="card-title">${stud.name}</div>
            </div>
          </div>
      `);
    });
    studentDetails.innerHTML = output;
  })
  .catch(error => console.error(error));
  