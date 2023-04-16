var searchParams = new URLSearchParams(window.location.search);

var id = searchParams.get('id');

console.log('ID:', id);

fetch('/wizard-house/staff/staff.json')
.then(response => response.json())
.then(data=>{
    var staff = data.find(function(item) {
        return item.id === id;
      });

    if(staff){
        const name=document.getElementById("name");
        const species=document.getElementById("species");
        const gender=document.getElementById("gender");
        const house=document.getElementById("house");
        const dob=document.getElementById("dob");
        const ancestry=document.getElementById("ancestry");
        const eye=document.getElementById("eye");
        const hair=document.getElementById("hair");
        const wand=document.getElementById("wand");
        const patronus=document.getElementById("patronus");
        const image=document.getElementById("image");
        const logo=document.getElementById('logo');


        if(staff.house==="Gryffindor") logo.src='/wizard-house/images/Gryffinder-logo.png';
        else if(staff.house==="Slytherin") logo.src='/wizard-house/images/Slytherin-logo.png';
        else if(staff.house==="Hufflepuff") logo.src='/wizard-house/images/Hufflepuff-logo.png';
        else logo.src='/wizard-house/images/Ravenclaw-logo.png';

        const bg=document.getElementById('card');

        if(staff.house==="Gryffindor") {bg.style.background='#9C1801'; bg.style.boxShadow='0px 0px 41px 33px rgba(255,182,169,1),inset 1px 1px 13px 16px rgba(0,0,0,0.75)'; document.body.style.backgroundColor = '#f8e0db';}
        else if(staff.house==="Slytherin") {bg.style.background='#148341'; bg.style.boxShadow='0px 0px 41px 33px #148341,inset 1px 1px 13px 16px rgba(0,0,0,0.75)'; document.body.style.backgroundColor = '#D9F7F7';}
        else if(staff.house==="Hufflepuff") {bg.style.background='#E8AF17'; bg.style.boxShadow='0px 0px 41px 33px #E8AF17,inset 1px 1px 13px 16px rgba(0,0,0,0.75)';  document.body.style.backgroundColor = '#FFFFDF';}
        else {bg.style.background='#3DB2D3'; bg.style.boxShadow='0px 0px 41px 33px #3DB2D3,inset 1px 1px 13px 16px rgba(0,0,0,0.75)';  document.body.style.backgroundColor = '#F5F5F5';}

        name.innerText=`${staff.name}`;
        species.innerText=`${staff.species}`;
        gender.innerText=`${staff.gender}`;
        house.innerText=`${staff.house}`;
        ancestry.innerText=`${staff.ancestry}`;
        dob.innerText=`${staff.dateOfBirth}`;
        eye.innerText=`${staff.eyeColour}`;
        hair.innerText=`${staff.hairColour}`;
        wand.innerText=`${staff.wand.core}`;
        patronus.innerText=`${staff.patronus}`;
        image.src=`${staff.image}`;
    }
})

fetch('/wizard-house/student/student.json')
.then(response => response.json())
.then(data=>{
    var staff = data.find(function(item) {
        return item.id === id;
      });

    if(staff){
        const name=document.getElementById("name");
        const species=document.getElementById("species");
        const gender=document.getElementById("gender");
        const house=document.getElementById("house");
        const dob=document.getElementById("dob");
        const ancestry=document.getElementById("ancestry");
        const eye=document.getElementById("eye");
        const hair=document.getElementById("hair");
        const wand=document.getElementById("wand");
        const patronus=document.getElementById("patronus");
        const image=document.getElementById("image");
        const logo=document.getElementById('logo');


        if(staff.house==="Gryffindor") logo.src='/wizard-house/images/Gryffinder-logo.png';
        else if(staff.house==="Slytherin") logo.src='/wizard-house/images/Slytherin-logo.png';
        else if(staff.house==="Hufflepuff") logo.src='/wizard-house/images/Hufflepuff-logo.png';
        else logo.src='/wizard-house/images/Ravenclaw-logo.png';

        const bg=document.getElementById('card');

        if(staff.house==="Gryffindor") {bg.style.background='#9C1801'; bg.style.boxShadow='0px 0px 41px 33px rgba(255,182,169,1),inset 1px 1px 13px 16px rgba(0,0,0,0.75)'; document.body.style.backgroundColor = '#f8e0db';}
        else if(staff.house==="Slytherin") {bg.style.background='#148341'; bg.style.boxShadow='0px 0px 41px 33px #B7EDDA,inset 1px 1px 13px 16px rgba(0,0,0,0.75)'; document.body.style.backgroundColor = '#D9F7F7';}
        else if(staff.house==="Hufflepuff") {bg.style.background='#E8AF17'; bg.style.boxShadow='0px 0px 41px 33px #FFE29B,inset 1px 1px 13px 16px rgba(0,0,0,0.75)';  document.body.style.backgroundColor = '#FFFFDF';}
        else {bg.style.background='#3DB2D3'; bg.style.boxShadow='0px 0px 41px 33px #AAEDFF,inset 1px 1px 13px 16px rgba(0,0,0,0.75)';  document.body.style.backgroundColor = '#F5F5F5';}

        name.innerText=`${staff.name}`;
        species.innerText=`${staff.species}`;
        gender.innerText=`${staff.gender}`;
        house.innerText=`${staff.house}`;
        ancestry.innerText=`${staff.ancestry}`;
        dob.innerText=`${staff.dateOfBirth}`;
        eye.innerText=`${staff.eyeColour}`;
        hair.innerText=`${staff.hairColour}`;
        wand.innerText=`${staff.wand.core}`;
        patronus.innerText=`${staff.patronus}`;
        image.src=`${staff.image}`;
    }
})