function addData() {
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  fullname = document.getElementById("fullname").value;
  address = document.getElementById("address").value;
  POI /* Proof of identity */ = document.getElementById("poi").files[0];
  POA /* Proof of address */ = document.getElementById("poa").files[0];

  old_data = JSON.parse(localStorage.getItem("login_data"));

  var obj = {
    email: email,
    password: password,
    fullname: fullname,
    address: address,
    poi: POI,
    poa: POA,
  };

  if (
    !email ||
    !password ||
    !fullname ||
    !address ||
    poi.files.length == 0 ||
    poa.files.length == 0
  )
    return false;

  /* Testing Purposes
    if (
      !email ||
      !password ||
      !fullname ||
      !address ||
      !poi ||
      !poa
    )
      return false;
    */

  if (old_data == null) {
    old_data = [];
    old_data.push(obj);
    localStorage.setItem("login_data", JSON.stringify(old_data));
    registercomplete();
  } else {
    for (let i = 0; i < old_data.length; i++) {
      console.log(old_data[i].email, email);
      if (old_data[i].email == obj.email) {
        return alert("This email is taken");
      } else {
        continue;
      }
    }
    console.log("completed");
    registercomplete();
    old_data.push(obj);
    localStorage.setItem("login_data", JSON.stringify(old_data));
  }
}

function registercomplete() {
  document.getElementById("booking_page").style.display = "flex";
  document.getElementById("register_modal").style.display = "none";
  ScrollDown(booking_page, -2);
}

function login() {
  email = document.getElementById("login_email").value;
  password = document.getElementById("login_password").value;
  old_data = JSON.parse(localStorage.getItem("login_data"));

  var obj = {
    email: email,
    password: password,
  };

  if (old_data == null) {
    return alert("There are currently no users registered");
  } else {
    for (let i = 0; i < old_data.length; i++) {
      if (
        old_data[i].email == obj.email &&
        old_data[i].password == obj.password
      )
        correct_details = true;
      else correct_details = false;
    }

    if (correct_details) {
      document.getElementById("booking_page").style.display = "flex";
      document.getElementById("login_modal").style.display = "none";
      ScrollDown(booking_page, -2);
      return alert("Login Successfully");
    } else {
      return alert("Incorrect Email or Password");
    }
  }
}
