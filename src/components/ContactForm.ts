export class ContactForm {
    private element: HTMLElement;
  
    constructor() {
      this.element = document.createElement("contact-form");
      this.render();
    }
  
    private render() {
      this.element.innerHTML = `
      <section class="[ contact ] [ bg-neutral-800 ]" id="contact">
        <div class="container">
          <div class="mx-auto">
            <div class="contact">
              <div class="contact__form">
                <h2>Contact Us</h2>
                <form action="">
                  <h4 class="">Get in touch with us!</h4>
                  <hr />
                  <div class="contact__group">
                    <div class="even-columns">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        class="contact-inputs"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        class="contact-inputs"
                        required
                      />
                    </div>
                    <textarea
                      name="message"
                      placeholder="Message"
                      class="contact-inputs"
                      required
                    ></textarea>
                  </div>
                  <div class="submit-button">
                    <button type="submit">
                      Submit
                      <img
                        src="Assets/arrow_right_white.png"
                        alt="arrow right"
                        class="button-arrow"
                      />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      `;
    }
  
    public attachToDOM() {
      const footer = document.querySelector('footer');
      if (footer) {
          footer.insertAdjacentElement('beforebegin', this.element); // Insert before the footer
      }
  }
}