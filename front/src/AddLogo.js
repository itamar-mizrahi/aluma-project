import react from 'react'

function AddLogo() {
  return (
    <div>
      <header>
        <h1>this is an h1 tag</h1>
        <img src={logo}  alt="logo" />
        <p>
          Edit and save to reload and show logo.
        </p>
      </header>
    </div>
  );
}

export default AddLogo;