const scaleTemplate = document.createElement('template');
scaleTemplate.innerHTML = `

    <style>
        @import 'styles/style.css';
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .container {
            margin-right: 5px;
            background-color: #A2A6A6;
            margin-bottom: 5px;
        }

        .container .skill{
            float: left;
            width: 20%;
        }

        .container .skill .icon{
            height: 30px;
            widht: 30px;
            margin: auto;
            display: block;
            margin-top:2px;
        }
        
        .container .percentage{
            float: left;
            width: 80%;
        }
        .container .percentage .meter{
            display: block;
            height: 34px;
            background-color: #000;
            color: #fff;
            text-align:right;
        }
        .container .percentage .meter .value{
            display: inline-block;
            margin-top:5px;
            font-size: 18px;
        }
    </style>

    <div class='container clearfix'>
        <div class='skill'>
            <img class='icon'/>
        </div> 
        <div class='percentage'>
            <span class='meter'><span class='value'></span></span>
        </div>
    </div>
`

class SkillScale extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: 'open'
        });
        this.shadowRoot.appendChild(scaleTemplate.content.cloneNode(true));
        this.shadowRoot.querySelector("div .skill .icon").setAttribute('src', this.getAttribute('icon'));
        this.shadowRoot.querySelector(".meter").setAttribute("style", "width:" + this.getAttribute("skill-rate") + ";");
        this.shadowRoot.querySelector(".value").innerText = this.getAttribute("skill-rate");

    }
}

window.customElements.define("skill-scale", SkillScale);