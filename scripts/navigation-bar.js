const navigationBarTemplate = document.createElement('template');
navigationBarTemplate.innerHTML = `
    <style>
    @import 'styles/style.css';
        nav {
            position: fixed;
            z-index:1;
            background-color: rgba(0,0,0,0.1);
            width: 100%;
            display: block;
        }
        nav ul {
            list-style-type: none;
            margin: 0;
            padding: 0; 
        }
        nav ul li{
            display: inline;
        }
        nav ul li a{
            display: block;
            text-decoration: none;
            float: left;
            padding: 8px;
            color: black;
            font-size: 20px;
            margin-right: 5px;
            transition: transform 1s;
        }
        nav ul li a:hover{
            transform: scale(1.1);
        }
        nav div{
            height: 2px;
            background-color: rgba(0,0,0,0.3);
        }
    </style>
    <nav>
        <ul class='clearfix'>
            <li> 
                <a href="#">Home</a> 
            </li>
            <li> 
                <a href="#">About</a> 
            </li>
            <li> 
                <a href="#">Projects</a> 
            </li>
            <li> 
                <a href="#">Blogs</a> 
            </li>
            <li> 
                <a href="#">Contact me</a> 
            </li>
        </ul>
        <div class='under-border'>

        </div>
    </nav>
`;
class NavigationBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: 'open'
        });
        this.shadowRoot.appendChild(navigationBarTemplate.content.cloneNode(true));
    }
}
window.customElements.define('nav-bar', NavigationBar);