function WelcomeMessage({ onGetPostsClick }) {
  return (
    <>
      <div style={{ margin: "190px" }}>
        <center>
          <h1>There Are No Posts :( </h1>
          <button
            type="button"
            className="btn btn-primary"
            onClick={onGetPostsClick}
          >
            Get Posts
          </button>
        </center>
      </div>
    </>
  );
}

export default WelcomeMessage;
