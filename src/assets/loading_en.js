const year = new Date().getFullYear();
const text = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
</head>
<body>
    <header>
        <div>
            <h1>Philippe Malo</h1>
            <h2>Web developer</h2>
        </div>
        <div>
            <nav>
                <a href="/home">~</a>
                <a href="/about">About</a>
                <a href="/demos">Demos</a>
                <a href="/contact">Contact me</a>
            </nav>
            <nav>
                <a href="/en/home>English</a>"
                <a href="/home">Français</a>
            </nav>
        </div>
    </header>
    <main>
        <p class="code">me@philippemalo.dev:~$ </p>
    </main>
    <footer>
        <p>${year} Philippe Malo</p>
    </footer>
</body>
</html>`;

export default text;