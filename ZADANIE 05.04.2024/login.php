<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Login</h1>
    <?php
        session_start();
        require_once 'config.php';

        if($_SERVER["REQUEST_METHOD"] == "POST") {
            $conn = new mysqli($servername, $username, $password, $dbname);
            if( $conn->connect_error())
                die("Błąd Połączenia") . $conn->connection_error();
        }

        $username = $_POST["username"];
        $password = $_POST["password"];

        $sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
        $result = $conn->query($sql);

        if($result->nums_rows == 1){
            $_SESSION["username"] = $username;
                header("Location: index.php");
                exit();
        } else{
            echo "Niewlasciwa nazwa uzytkownika";
        }

        $conn->close();
    ?>
    
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
        <label for ="username">Username:<label>
            <input type="text" name="username" id="username" required> <br>
        <label for="password">Password:</label>
            <input type="text" name="password" id="password" required> <br>
            <input type="submit" value="Login">
    </form>
</body>
</html>
