fetch('./student.json')
  .then(response => response.json())
  .then(data => {
    const studentDetails = document.getElementById('card');
    let output = '';
    data.forEach(stud => {
      output += (`
          <div class="card-data">
          <a href='http://127.0.0.1:5501/wizard-house/profile/profile.html?id=${stud.id}'>
            <img src="/wizard-house/images/frame.png" class="card-img-bottom" alt="frame">
            <div class="card-body">
            <a href='http://127.0.0.1:5501/wizard-house/profile/profile.html?id=${stud.id}'>
            <img src="${stud.image}" class="card-img-top"  alt="${stud.name}">
              <div class="card-title">${stud.name}</div>
              </a>
            </div>
            </a>
          </div>
      `);
    });
    studentDetails.innerHTML = output;
  })
  .catch(error => console.error(error));
  