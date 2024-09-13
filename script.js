document.addEventListener("DOMContentLoaded", () => {
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
            1: "TypeScript is like a puzzle helper! Imagine you're putting together a puzzle, and TypeScript tells you if the pieces don’t fit before you even try. It’s still JavaScript, but with extra rules to make sure everything fits perfectly. You don’t have to change much—just write your code, and TypeScript helps catch mistakes early so things don’t break later. It’s a smart way to write safer, more reliable code!",
            2: `Before you write TypeScript, you need to install it. You use a tool called npm or yarn to do this. Just open your terminal and type: npm install -g typescript`
        };

        const extraContent = `
            <h3>2. From .js to .ts</h3>
            <p>Start by changing your file from .js (JavaScript) to .ts (TypeScript). Rename script.js to script.ts!</p>
            <h3>3. Declaring Types</h3>
            <pre><code>let age: number = 10;</code></pre>
            <p>This ensures that age is always a number.</p>
            <h3>4. Objects in TypeScript</h3>
            <pre><code>
interface Person {
  name: string;
  age: number;
}
let person: Person = { name: "Lily", age: 12 };
            </code></pre>
            <p>Objects are more specific in TypeScript!</p>
            <h3>5. Functions with TypeScript</h3>
            <pre><code>
function add(a: number, b: number): number {
  return a + b;
}
            </code></pre>
            <h3>6. TypeScript Catches Mistakes Early</h3>
            <pre><code>let isCool: boolean = true;</code></pre>
            <p>TypeScript stops errors like assigning wrong types.</p>
            <h3>7. Running TypeScript</h3>
            <p>Turn your .ts file into JavaScript by running:</p>
            <pre><code>tsc yourFile.ts</code></pre>`;

        const postElement = document.querySelector(`[data-post='${postId}']`).parentElement;
        const postParagraph = postElement.querySelector("p");
        postParagraph.textContent = postContent[postId];



        if (postId === "1") {
            const image = document.createElement("img");
            image.src = "/images/typescript.png"
            image.alt = "TypeScript Example";
            image.style.width = "70%"; 
            postElement.appendChild(image);


            const explanation = document.createElement("p");
            explanation.textContent = "This image explains how TypeScript is built on top of JavaScript (JS). JavaScript is at the core, and TypeScript adds extra features like interfaces and generics (more advanced tools) that help you write better code. TypeScript can’t be understood by the browser directly, so it gets turned into regular JavaScript (called compiling) before running. Think of it as adding more pieces to your puzzle to make it more powerful, but the final picture (code) is still made of JavaScript!";
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
         }}

            if (postId === "2") {
                        postParagraph.innerHTML = postContent[postId]; // Use innerHTML for rendering <code> tag properly
                        const extraDiv = document.createElement("div");
                        extraDiv.innerHTML = extraContent;
                        postElement.appendChild(extraDiv);
                    }



});


