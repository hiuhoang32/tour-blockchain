<?php
    require 'config.php';
    if(isset($_POST["submit"])) {
        $username = $_POST["userName"];
        $firstname = $_POST["firstName"];
        $lastname = $_POST["lastName"];
        $email = $_POST["email"];
        $tel = $_POST["tel"];
        $password = $_POST["password"];
        $confirm_password = $_POST["confirmPassword"];
        $duplicate = mysqli_query($conn, "SELECT * FROM customer WHERE customer_username = '$username' OR email = '$email'");
        if (mysqli_num_rows($duplicate) > 0) {
            echo
            "<script> alert('Username or Email Has Already Taken'); </script>";
        }
        else {
            if ($password == $confirmpassword) {
                $query = "INSERT INTO customer VALUES ('', '$firstname', '$lastname', '$username', '$email', '$password' )";
                mysqli_query($conn,$query);
                echo
                "<script> alert('Registration Success'); </script>";
            }
        else {
            echo
            "<script> alert('Password Does Not Match'); </script>";
        }
        }
    }

    if(isset($_POST["submit"])) {
        $username = $_POST["userName"];
        $password = $_POST["password"];
        $result = mysqli_query($conn, "SELECT * FROM customer WHERE username = '$username'");
        $row = mysqli_fetch_assoc($result);
        if(mysqli_num_rows($result) > 0) {
            if ($password == $row["password"]) {
                $_SESSION["login"] = true;
                $_SESSION["id"] = $row["id"];
                header("Location: index.php");
                
            }
            else {
                echo
                "<script> alert('Wrong Password!'); </script>";

            }
        }
        else {
            echo
            "<script> alert('Username Does Not Exist!'); </script>";
        }
    }
    
    if ($conn->connect_error) {
        echo "Connection error: " . $conn->connect_error;
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="css/bootstrap.rtl.min.css">
    <script src="js/bootstrap.bundle.min.js" defer></script>
    <script src="js/vue.js"></script>
    <script src="js/login.js" defer></script>
    <style>
        .form {
            float: left;
            width: 33%;
            border: 1px solid black;
            padding: 20px;
        }
    </style>
</head>
<body>
    <nav>
        <ul>
            <li><a href="index.php">Home</a></li>
            <li><a href="transaction_history.php" class="active">Transaction History</a></li>
            <li><a href="login.php" class="active">Login</a></li>
        </ul>
    </nav>
    <div class="container">
        <form method="post" class="" action="" id="login-form" autocomplete="off">
            <h1 v-show="view=='signin'">Sign In</h1>
            <h1 v-show="view=='signup'">Sign Up</h1>
            <div v-show="view=='signup'">
                <div class="mb-3">
                    <label for="firstName" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="firstName">
                </div>
                <div class="mb-3">
                    <label for="lastName" class="form-label">Last Name</label>
                    <input type="text" class="form-control" id="lastName">
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email">
                </div>
                <div class="mb-3">
                    <label for="tel" class="form-label">Telephone number</label>
                    <input type="tel" class="form-control" id="tel">
                </div>
            </div>

            <div class="mb-3">
              <label for="userName" class="form-label">Username</label>
              <input type="text" class="form-control" id="userName" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="Password" class="form-label">Password</label>
              <input type="password" class="form-control" id="Password">
            </div>
            <div v-show="view=='signin'">
              <label class="form-check-label" for="Check">Stay Sign In</label>
              <input type="checkbox" class="form-check-input" id="Check">
            </div>
            <div class="mb-3" v-show="view=='signup'">
                <label for="confirmPassword" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="confirmPassword">
            </div>

            <div class="d-grid gap-2 col-6 mx-auto" >
                <div v-show="view=='signin'">
                    <button type="submit" class="btn btn-primary" id="login">Log In</button><br>
                    <label for="createAccount" class="form-label">Don't have an account?</label><br>
                    <button type="button" id="createAccount" class="btn btn-primary" v-on:click="view='signup'">Create a new account</button>
                </div>
                <div v-show="view=='signup'">
                    <button type="submit" class="btn btn-primary" id="register">Register</button><br>
                    <label for="signIn" class="form-label">Already have an account?</label><br>
                    <button type="button" id="signIn" class="btn btn-primary" v-on:click="view='signin'">Sign In</button>
                </div>
            </div>
          </form>
    </div>
</body>
</html>