export class Header {
  private element: HTMLElement;

  constructor() {
    this.element = document.createElement("header");
    this.render();
  }

  private render() {
    this.element.innerHTML = `
            <header
  class="[ navigation ] [ bg-neutral-900 padding-block-36 align-items-center ]"
>
  <div class="[ logo ] [ flex-between align-items-center ]">
    <div class="align-items-center margin-inline-start-24">
      <a href="index.html" class="[ logo ]">
        <h1 class="[ logo ] [ fs-700 clr-neutral-100 ]">REALITY-B</h1>
      </a>
    </div>
    <div class="[ align-items-center ]">
      <nav class="[ primary-navigation ]">
        <ul class="[ flex-group margin-inline-end-24 ]" id="menu">
          <div class="flex-even-columns align-items-center">
            <li>
              <a href="index.html">HOME</a>
            </li>
            <li>
              <a href="services/">SERVICES</a>
            </li>
            <li>
              <a href="projects/">PROJECTS</a>
            </li>
            <li>
              <a href="about/">ABOUT US</a>
            </li>
          </div>
          <div>
            <li>
              <a class="button" data-type="accent" href="#contact"
                >CONTACT US</a
              >
            </li>
          </div>
        </ul>
        <a href="#" class="mobile-toggle" onClick="toggleMobileMenu();">
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </a>
      </nav>
    </div>
  </div>
</header>

        `;
  }

  public attachToDOM() {
    document.body.prepend(this.element); // Add to the beginning of the body
  }
}
