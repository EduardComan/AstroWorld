import React from 'react';
import '../App.css';
import './ReviewSection.css';
import './styles.css';

function ReviewSection() {
  return (
    <div className='review-container'>
      <h1>In 2022 magic happened before our eyes</h1>
      <p>Want to see a short summary?</p>
      <div className='review-btns'>
        <a href="https://www.youtube.com/watch?v=Z5cayPF5qeQ&list=LL&index=4&t=40s" className='button-style button-outline'>WATCH TRAILER <i className='far fa-play-circle' /></a>
      </div>
    </div>
  );
}

export default ReviewSection;