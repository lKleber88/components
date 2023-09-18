/* class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"})
        shadow.innerHTML = "<h1>Hello World!!</h1>"

        //estilizar o component
        const style = document.createElement("style");
        style.textContent = `
            h1 {
                color: blue;
            }
        `

        shadow.appendChild(style);
    }
}

customElements.define('card-news', CardNews) */


class CardNews extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }

    build() {   

        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card")

        const cardLeft = document.createElement("div")
        cardLeft.setAttribute("class", "card_left")

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle =document.createElement("a");
        linkTitle.textContent = this.getAttribute("title")
        linkTitle.href = this.getAttribute("link-url")


        const newsContent =document.createElement("p");
        newsContent.textContent = this.getAttribute("content")
        
        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div")
        cardLeft.setAttribute("class", "card_right")

        const newsImage = document.createElement("img")
        newsImage.src = this.getAttribute("photo") || "./assets/anonimo.png";
        newsImage.alt = "Darth Vader chama..."
        cardRight.appendChild(newsImage)

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);


        
        return componentRoot
    }

    styles() {

        const style = document.createElement("style")
        style.textContent = `
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI', sans-serif;
        }
        
        body {
            background-image: url("https://cdn.ome.lt/ieFfrgjrCMFcDCSMv9_B9TGqZbI=/1200x630/smart/extras/conteudos/Death-Star-I-copy_36ad2500.jpeg") ;
            background-size: cover;
            
        }
        
        .card {
            color: red;
            width: 80%;
            /* border: 1px solid gray; */
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            -webkit-box-shadow: 10px 10px 5px 0px rgba(74,32,32,1);
            -moz-box-shadow: 10px 10px 5px 0px rgba(74,32,32,1);
            box-shadow: 10px 10px 5px 0px rgba(74,32,32,1);
            
        }
        
        /* .card_left, .card_right {
            border: 1px solid blue ;
        } */
        
        div, .card_left {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        
        span {
            font-weight: 400;
        }
        
        a {
            margin-top: 20px;
            font-size: 50px;
        }
        
        p {
            background-color: rgba(128, 128, 128, 0.177);
            color: rgb(248, 5, 5);
        }
        
        div, .img {
        }


        `
        return style
    }
}

customElements.define("card-news", CardNews);