import React from 'react';
import '../styles/subscribe.css';

const Subscribe = () => {
  return (
    <div id="mc_embed_signup">
      <form
        action="https://matbub.us17.list-manage.com/subscribe/post?u=eb89624098c8ce40b7f3b26ef&amp;id=909f807d9f"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate>
        <div className="form-cont">
          <input
            className="email"
            name="EMAIL"
            id="mce-EMAIL"
            defaultValue=""
            type="email"
            placeholder="e.g. hi@matbub.co"
            aria-label="Repository description"
            style={{border: 0}}
          />

          <div id="mce-responses" className="clear">
            <div
              className="response"
              id="mce-error-response"
              style={{display: 'none'}}></div>
            <div
              className="response"
              id="mce-success-response"
              style={{display: 'none'}}></div>
          </div>
          <button
            type="submit"
            name="subscribe"
            id="mc-embedded-subscribe"
            className="button">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Subscribe;
