

document.addEventListener("DOMContentLoaded", () => {
    const homeLink = document.getElementById('home-link');
    const resourcesLink = document.getElementById('resources-link');
    const homeSection = document.getElementById('blog-posts');
    const resourcesSection = document.getElementById('resources');

    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        homeSection.style.display = 'block';
        resourcesSection.style.display = 'none';
    });

    resourcesLink.addEventListener('click', (e) => {
        e.preventDefault();
        homeSection.style.display = 'none';
        resourcesSection.style.display = 'block';
    });





    const readMoreButtons = document.querySelectorAll(".read-more");
    readMoreButtons.forEach(button => {
        button.addEventListener("click", function() {
            const postId = this.getAttribute("data-post");
            showFullPost(postId);
            this.style.display = "none";
        });
    });

    function showFullPost(postId) {
        const postContent = {
            1: "TypeScript is like a puzzle helper! Imagine you're putting together a puzzle, and TypeScript tells you if the pieces don’t fit before you even try. It’s still JavaScript, but with extra rules to make sure everything fits perfectly. You don’t have to change much—just write your code, and TypeScript helps catch mistakes early so things don’t break later. It’s a smart way to write safer, more reliable code.",
            2: `Before you write TypeScript, you need to install it. You use a tool called npm or yarn to do this. Just open your terminal and type: npm install -g typescript`
        };

        const postElement = document.querySelector(`[data-post='${postId}']`).parentElement;
        const postParagraph = postElement.querySelector("p");
        postParagraph.textContent = postContent[postId];




        if (postId === "1") {
            const image = document.createElement("img");
            image.src = "https://media.licdn.com/dms/image/C4E12AQGjvH3eTBDdmg/article-cover_image-shrink_600_2000/0/1597593610760?e=2147483647&v=beta&t=rMt8_v4wXHDrrndOaO6L-n9XS4lNFCxFZFEinEYKX20";
            image.alt = "TypeScript Example";
            image.style.width = "70%"; 
            postElement.appendChild(image);


            const explanation = document.createElement("p");
            explanation.textContent = "This image explains how TypeScript is built on top of JavaScript (JS). JavaScript is at the core, and TypeScript adds extra features like interfaces and generics (more advanced tools) that help you write better code. TypeScript can’t be understood by the browser directly, so it gets turned into regular JavaScript (called compiling) before running. Think of it as adding more pieces to your puzzle to make it more powerful, but the final picture (code) is still made of JavaScript.";
            postElement.appendChild(explanation); 

            const whyUseTypeScript = document.createElement("div");
            whyUseTypeScript.innerHTML = `
            <h3>Why Use TypeScript</h3>
            <ul>
                <li><strong>Catches Mistakes Early:</strong> TypeScript tells you when something might go wrong in your code before it even runs. For example, if you accidentally try to add a word and a number, it’ll stop you.</li>
                <li><strong>Easier to Work in Teams:</strong> With TypeScript, everyone knows exactly what kind of data should be used, so there's less confusion.</li>
                <li><strong>Make Code Easier to UnderstandL</strong> TypeScript helps explain what each piece of your code does, like labeling puzzle pieces, so it’s easier for everyone to follow.</li>
            </ul> 
            `;
            postElement.appendChild(whyUseTypeScript);
         }
    }
});
