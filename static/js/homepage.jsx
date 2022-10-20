'use strict';

function Homepage(props) {
  return (
    <React.Fragment>
    {/* <h1>Welcome! This is Balloonicorn's Trading Card Website!</h1> */}
      <div>
        <a href="/cards">Click to see cards</a>
      </div>
      <div>
      <img src={props.imgUrl}></img>
      </div>
    </React.Fragment>
  );
}

ReactDOM.render(<Homepage imgUrl="/static/img/balloonicorn.jpg" />, 
document.querySelector('#app'));