const navigationBarTemplate = document.createElement('template');
navigationBarTemplate.innerHTML = `
        <nav>
            
        </nav>
`;
class NavigationBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: 'open'
        });
        this.shadowRoot.appendChild();
    }
}