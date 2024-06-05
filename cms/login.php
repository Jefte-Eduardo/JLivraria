<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inconsolata&family=Rokkitt&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/login.css">
    <title>CMS LOGIN</title>
</head>

<body>
    <header>
        <h2>ACESSO A</h2>
        <h1>J-DARK</h1>
    </header>

    <div class="line"></div>

    <form name="frmLogin" , method="POST" , action="">
        <div class="user-area">
            <label>Usuário</label>
            <input type="text" name="user" required>
        </div>
        <div class="code-area">
            <label>Senha</label>
            <input type="password" name="passwd" required>
        </div>
        <input type="submit" name="btnAcessar" value="entrar" class="log">
    </form>

    <div class="line footer"></div>

    <footer>
        <span>
            J-DARK&reg;
        </span>
    </footer>
</body>

</html>