/* eslint-disable no-console */
import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import TextField from '@material-ui/core/TextField';

// Components
import SocialLink from './SocialLink.component';
import SendButton from './SendButton';

// Utility Functions
import sendMail from '../../utils/request';

// Data
import { CONTACT_DETAILS, SOCIAL_LINKS } from '../../DataStore';

const ContactCard = () => {
  const [contactDetails, setContactDetails] = useState(CONTACT_DETAILS);
  const [socialLinks] = useState(SOCIAL_LINKS);

  // Destructuring
  const { name, email, message } = contactDetails;

  // Initialising alerts
  const alert = useAlert();

  // Handle change of input field
  const onChange = e => {
    setContactDetails({
      ...contactDetails,
      [e.target.name]: e.target.value
    });
  };

  // Handle sumbit of form
  const onSubmit = e => {
    e.preventDefault();

    const emptyContacts = {
      name: '',
      email: '',
      message: ''
    };

    // Handle promises
    sendMail(contactDetails.name, contactDetails.email, contactDetails.message)
      .then(() => {
        alert.show('Message sent');
        setContactDetails(emptyContacts);
      })
      .catch(error => {
        alert.show('Incorrect values provided, please check your inputs.');
        console.log(error);
      });
  };

  return (
    <div className="container flex justify-center mx-auto">
      <div className="w-full md:w-160 rounded-lg flex shadow-card rounded-lg flex flex-col-reverse md:flex-row mx-8 sm:mx-40 p-4 py-8">
        <div className="bg-acm-blue text-white relative flex flex-col justify-between md:-left-64 shadow-card rounded-lg px-6 py-4">
          <div className="text-4xl text-center md:text-left">Reach us at</div>
          <div className="flex flex-col justify-center items-center md:mb-8">
            {socialLinks.map(social => (
              <SocialLink logo={social.logo} url={social.url} key={social.id}>
                {social.handle}
              </SocialLink>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col justify-star my-4">
          <div className="w-full text-4xl text-center md:text-left">
            Contact Us
          </div>
          <form autoComplete="off" className="my-auto" onSubmit={onSubmit}>
            <div className="flex justify-center md:justify-start my-8">
              <TextField
                id="standard-basic"
                label="Name"
                name="name"
                value={name}
              />
            </div>
            <div className="my-8 flex justify-center md:justify-start">
              <TextField
                id="standard-basic"
                label="Email"
                name="email"
                value={email}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="my-8 flex justify-center md:justify-start">
              <TextField
                id="standard-basic"
                label="Text"
                name="message"
                value={message}
                onChange={e => onChange(e)}
              />
            </div>
            <SendButton />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
