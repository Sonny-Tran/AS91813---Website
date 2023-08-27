// Get the modal
var modal = document.getElementById("login_modal");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function addData() {
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  fullname = document.getElementById("fullname").value;
  address = document.getElementById("address").value;
  POI /* Proof of identity */ = document.getElementById("poi").files[0];
  POA /* Proof of address */ = document.getElementById("poa").files[0];

  const old_data = JSON.parse(localStorage.getItem("login_data"));

  var obj = {
    email: email,
    password: password,
  };

  if (old_data == null) {
    old_data = [];
    old_data.push(obj);
    localStorage.setItem("login_data", JSON.stringify(old_data));
  } else {
    for (let i = 0; i < old_data.length; i++) {
      console.log(old_data[i].email, email);
      if (old_data[i].email == obj.email) {
        return alert("This email is taken");
      }
    }
    old_data.push(obj);
    localStorage.setItem("login_data", JSON.stringify(old_data));
  }
}
