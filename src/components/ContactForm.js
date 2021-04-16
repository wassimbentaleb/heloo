import React, { useState } from 'react';

function ContactForm(props) {

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [email, setEmail] = useState('')
  const [hasEmailError, setHasEmailError] = useState(false)
  const [content, setContent] = useState('')
  const [hasContentError, setHasContentError] = useState(false)

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isSubmitted: false,
  //     email: '',
  //     hasEmailError: false,
  //     /* Add the states "content" and "hasContentError" */
  //     content:'',
  //     hasContentError:false,

  //   };
  // }

  const handleEmailChange = (event) => {
    const inputValue = event.target.value;
    const isEmpty = inputValue === '';
    // this.setState({
    //   email: inputValue,
    //   hasEmailError: isEmpty,
    // });

    setEmail(inputValue)
    setHasEmailError(isEmpty)
  }

  /* Declare the method handleContentChange */
  const handleContentChange = (event) => {
    const inputValue = event.target.value;
    const isEmpty = inputValue === ''
    // this.setState({
    //   content: inputValue,
    //   hasContentError: isEmpty
    // })
    setContent(inputValue)
    setHasContentError(isEmpty)
  }

  const handleSubmit = () => {
    // this.setState({ isSubmitted: true });
    setIsSubmitted(true)
  }


  let emailErrorText;
  if (hasEmailError) {
    emailErrorText = (
      <p className='contact-message-error'>
        Please enter your email address
      </p>
    );
  }

  /* Declare the variable contentErrorText */
  let contentErrorText

  /* Create an if statement with hasContentError as the condition */
  if (hasContentError) {
    contentErrorText = (<p className='contact-message-error'>
      Please enter your message
    </p>
    )
  }

  let contactForm;
  if (isSubmitted) {
    contactForm = (
      <div className='contact-submit-message'>
        Sent Successfully
      </div>
    );
  } else {
    contactForm = (
      <form onSubmit={() => { handleSubmit() }} >
        <p>Email Address (required)</p>
        <input
          value={email}
          onChange={(event) => { handleEmailChange(event) }}
        />
        {emailErrorText}
        <p>Message (required)</p>
        {/* Add the value and an onChange event */}
        <textarea
          value={content}
          onChange={(event) => { handleContentChange(event) }}
        />
        {/* Display contentErrorText  */}
        {contentErrorText}

        <input
          type='submit'
          value='Send'
        />
      </form>
    );
  }

  return (
    <div className='contact-form'>
      {contactForm}
    </div>
  );
}


export default ContactForm;
