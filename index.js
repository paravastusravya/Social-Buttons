const Button = (props) => {
  //  Write your code here.
  const { className, text } = props;
  return <button className={`button ${className}`}>{text}</button>;
};

const element = (
  //  Write your code here.
  <div>
    <div className="social-button-container">
      <div className="content-container">
        <h1 className="heading">Social Buttons</h1>
        <div className="buttons-container">
          <Button className="like-button" text="Like" />
          <Button className="comment-button" text="Comment" />
          <Button className="share-button" text="Share" />
        </div>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
