const SubmitButton = (props) => {
  if (props.submit === false) {
    return (
      <button onClick={props.onClick} type="submit" className={props.className}>
        {props.text}
      </button>
    );
  } else {
    return (
      <button disabled={true} className={props.className}>
        <div
          className="bg-blue-700 py-2 block rounded-md text-white font-semibold hover:bg-blue-900"
          role="status"
          aria-label="loading"
        >
          <span class="sr-only">Procesing...</span>
        </div>
      </button>
    );
  }
};

export default SubmitButton;
