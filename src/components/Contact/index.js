/*
 * Npm import
 */
import React from 'react';
/*
 * Local import
 */

/*
 * Component
 */


const Contact = () => (
  <div id="contact">
    <p className="h3 white">Contact</p>
    <form>
      <input placeholder="Name" type="texte" />
      <input placeholder="E-mail" type="texte" />
      <textarea placeholder="Message" type="texte" />
      <button type="submit">Send</button>
    </form>
  </div>
);

/*
 * Export default
 */
export default Contact;
