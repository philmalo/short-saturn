
document.addEventListener("DOMContentLoaded", () => {
    const firstLoadOutputElement = document.querySelector('pre.code');
    console.log(firstLoadOutputElement)
    
    const outputElement = document.querySelector('.code');
    const text = `<header>
    <div>
        <h1>Philippe Malo</h1>
        <h2>Web Dev</h2>
    </div>
    <nav>
        <a id="whoami" href="#">À propos</a>
        <a id="lynx" href="#">Démos</a>
        <a id="npm-contributors" href="#">Contact</a>
    </nav>
</header>
<main>
    <p class="code">me@philippe-malo-dev:~$ </p>
</main>
<footer>
    <p>2023 My Name lol</p>
</footer>`;
    const whoAmI = document.querySelector("#whoami");
    let firstRun = true;

    whoAmI.addEventListener("click", (e) => {
        e.preventDefault;

        let inputText = document.querySelector('p.code');
        let newText = "whoami";
        typewriter(inputText, newText, 0);

        setTimeout(()=> {   
            let codeWindow = document.querySelector('main');
            let responseElement = document.createElement('p');
            const responseText = `Nouvellement dimplômé suite à un changement de carrière, je fais mon chemin dans le merveilleux univers du développement web!`;
            codeWindow.appendChild(responseElement)

            typewriter(responseElement, responseText, 0);
        }, 500)
    })

    function typewriter(outputElement, text, index) {
        outputElement.classList.add('paused');
        if (index < text.length) {
            const typingDelay = Math.random() * (40 - 30) + 10;
            outputElement.innerHTML += text.charAt(index);

            index++;
            setTimeout(() => {
                typewriter(outputElement, text, index);

                if(firstRun && index >= text.length) {
                    firstRun = false;
                    document.querySelectorAll('.hidden').forEach(element => {

                        element.classList.remove('hidden')
                    })

                    let code = document.querySelector('pre');
                    code.style.display = 'none';
                    outputElement.classList.remove('paused');
                }
                else if( index >= text.length) {
                    outputElement.classList.remove('paused');
                }
            }, typingDelay);
        }
    }

    typewriter(firstLoadOutputElement, text, 0);
});