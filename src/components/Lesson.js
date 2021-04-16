import React, { useState } from 'react';

function Lesson(props) {

  const [isModalOpen, setIsModalOpen] = useState(false)

  // constructor(props) {
  //   super(props);
  //   this.state = { isModalOpen: false };
  // }

  const handleClickLesson = () => {
    // this.setState({ isModalOpen: true });
    setIsModalOpen(true)
  }

  const handleClickClose = () => {
    // this.setState({ isModalOpen: false });
    setIsModalOpen(false)
  }

  let modal;
  if (isModalOpen) {
    modal = (
      <div className='modal'>
        <div className='modal-inner'>
          <div className='modal-header'></div>
          <div className='modal-introduction'>
            <h2>{props.name}</h2>
            <p>{props.introduction}</p>
          </div>
          <button
            className='modal-close-btn'
            onClick={() => handleClickClose()}
          >
            とじる
            </button>
        </div>
      </div>
    );
  }

  return (
    <div className='lesson-card'>
      <div
        className='lesson-item'
        onClick={() => { handleClickLesson() }}
      >
        <p>{props.name}</p>
        <img src={props.image} />
      </div>
      {modal}
    </div>
  );
}


export default Lesson;

