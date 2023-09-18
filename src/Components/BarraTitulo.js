class BarraTitulo extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"})

        //enviar para a shadow
        shadow.appendChild(this.esqueleto());
        shadow.appendChild(this.estilo());

    }

    esqueleto() {

        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "grid")
        
        const composicao = document.createElement("div")
        composicao.setAttribute("class", "grupo")
        
        const inicioUm = document.createElement("h1");
        inicioUm.textContent = this.getAttribute("titulo1")

        const inicioDois = document.createElement("h1");
        inicioDois.textContent = this.getAttribute("titulo2")

        const inicioTres = document.createElement("h1");
        inicioTres.textContent = this.getAttribute("titulo3")

        composicao.appendChild(inicioUm);
        composicao.appendChild(inicioDois);
        composicao.appendChild(inicioTres);

        componentRoot.appendChild(composicao);


        return componentRoot

    }

    estilo() {

        //estilizar o component
        const style = document.createElement("style");
        style.textContent = 
        `
            .grid {
                color: red;
                width: 100%;
                /* border: 1px solid gray; */
                background-image: url("./assets/space2.gif");
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                display: flex;
                -webkit-box-shadow: 10px 10px 5px 0px rgba(74,32,32,1);
                -moz-box-shadow: 10px 10px 5px 0px rgba(74,32,32,1);
                box-shadow: 10px 10px 5px 0px rgba(74,32,32,1);
            }

            div, .composicao{
                
                display: flex;
                flex-direction: row;
                justify-content: center;
                gap: 300px;
                
            }

            h1 {
                padding: 10px;
                border: 5px solid rgba(0, 0, 0, 0.466);
            }
        `
        return style
    }    
}

customElements.define("barra-titulo", BarraTitulo)