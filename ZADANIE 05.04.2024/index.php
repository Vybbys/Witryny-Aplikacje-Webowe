<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zadanie</title>
</head>
<body>
    <?php 
        $servername = 'localhost';
        $username = 'username';
        $password = 'password';
        $dbname = 'bazaDanych';

        $conn = new mysqli($servername, $username, $password $dbname);

        $sql = "SELECT * FROM entries";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                echo
                $row["author"] . "<br>" .
                $row["created_at"] . "<br>" .
                $row["content"] . "<br>";
            }
        } else {
            echo "0 wynikow";
        }
        $conn->close();
    ?>

    <a href = "login.php">Login </a>;
</body>
</html>