import { Header } from "./components/Header"; // Corrected import path
import { ContactForm } from "./components/ContactForm"; // Corrected import path
import '../src/sass/main.scss'; // Ensure the path is correct


const header = new Header();
header.attachToDOM();
const contactForm = new ContactForm();
contactForm.attachToDOM();