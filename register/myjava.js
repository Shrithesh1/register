function submitdetail() {
    //alert(document.getElementById("exampleInputEmail1").value)
    var email = document.getElementById("exampleInputEmail1").value;
    var username = document.getElementById("exampleInputUsername1").value;
    var phonenumber = document.getElementById("exampleInputphonenumber").value;
    var age = document.getElementById("exampleInputAge").value;
    var gender = document.getElementById("exampleInputGender").value;
    var address = document.getElementById("exampleInputAddress").value;
    var father = document.getElementById("exampleInputFathername").value;
    var mother = document.getElementById("exampleInputMother").value;
    var password = document.getElementById("exampleInputPassword1").value;
    document.getElementById("userform").innerHTML = `<div class="card" style="width:
    18rem;">
    <ul class="list-group list-group-flush">
    <li class="list-group-item">Email :${email}</tr>
    <li class="list-group-item">Full Name :${username}</tr>
    <li class="list-group-item">Phone Number :${phonenumber}</tr>
    <li class="list-group-item">Age :${age}</tr>
    <li class="list-group-item">Gender :${gender}</tr>
    <li class="list-group-item">Address :${address}</tr>
    <li class="list-group-item">Father :${father}</tr>
    <li class="list-group-item">Mother :${mother}</tr>
    <li class="list-group-item">Password :${password}</tr>
    </ul>
    <div class="card"><button type="button" class="btn btn-primary"
    onclick="restform()">Rest</button></div>
    </div>
    `;
    /*document.getElementsByClassName("reset-form").value = formdetalis;*/
    }
    function restform() {
    document.getElementById("userform").innerHTML = `(index.html file)`