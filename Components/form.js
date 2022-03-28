import React from "react";

const form = () => {
  return (
    <div className="cont" id="contact">
      <form action="" className="imgg">
        <div className="title">
          <h2>CONTACT</h2>
        </div>
        <div className="half">
          <div className="item">
            <label htmlFor="name">NAME</label>
            <input type="text" id="name" />
          </div>
          <div className="item">
            <label htmlFor="email">EMAIL</label>
            <input type="text" id="email" />
          </div>
        </div>
        <div className="full">
          <label htmlFor="message">MESSAGE</label>
          <textarea name="" id="message"></textarea>
        </div>
        <div className="action">
          <input type="submit" value="SEND MESSAGE" />
          <input type="reset" value="RESET" />
        </div>
        <div className="icons">
          <a href="" className="fa fa-twitter"></a>
          <a href="" className="fa fa-facebook"></a>
          <a href="" className="fa fa-instagram"></a>
          <a href="" className="fa fa-github"></a>
        </div>
      </form>
        <hr/>
    </div>
  );
};

export default form;
