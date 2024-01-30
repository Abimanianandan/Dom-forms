function addHtmlTableRow(){
    
    let table=document.getElementById("table"),
    newRow = table.insertRow(table.length),
    cell1=newRow.insertCell(0),
    cell2=newRow.insertCell(1),
    cell3=newRow.insertCell(2),
    cell4=newRow.insertCell(3),
    cell5=newRow.insertCell(4),
    cell6=newRow.insertCell(5),
    cell7=newRow.insertCell(6),
    cell8=newRow.insertCell(7),
    cell9=newRow.insertCell(8),
    fname=document.getElementById("first-name").value,
    lname=document.getElementById("last-name").value,
    email=document.getElementById("email").value,
    address=document.getElementById("address").value,
    pincode=document.getElementById("pincode").value,
    gender=document.querySelector('input[type="radio"]:checked');
    let food=[];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(item=>{
      if(item.checked===true){
        food.push(item.value);
      }
    });
    cell7.innerHTML=food;
    

    state=document.getElementById("state").value,
    country=document.getElementById("country").value;


    cell1.innerHTML=fname;
    cell2.innerHTML=lname;
    cell3.innerHTML=email;
    cell4.innerHTML=address;
    cell5.innerHTML=pincode;
    cell6.innerHTML=gender.value;
    cell8.innerHTML=state;
    cell9.innerHTML=country;
  
  clearForm();
}

function clearForm(){
  fname=document.getElementById("first-name").value="";
  lname=document.getElementById("last-name").value="";
  email=document.getElementById("email").value="",
  address=document.getElementById("address").value="";
  pincode=document.getElementById("pincode").value="";
  gender=document.querySelector('input[type="radio"]:checked').value="";
  food=document.querySelectorAll('input[type="checkbox"]:checked').value="";
  state=document.getElementById("state").value="";
  country=document.getElementById("country").value="";   
};