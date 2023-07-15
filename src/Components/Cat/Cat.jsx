import './Cat.css';

function Cat() {
  return (
    <body>
      <div class="cat">
        <div class="ear ear--left"></div>
        <div class="ear ear--right"></div>
        <div class="face">
          <div class="eye eye--left">
            <div class="eye-pupil"></div>
          </div>
          <div class="eye eye--right">
            <div class="eye-pupil"></div>
          </div>
          <div class="muzzle"></div>
        </div>
      </div>
    </body>
  );
}

export default Cat;
