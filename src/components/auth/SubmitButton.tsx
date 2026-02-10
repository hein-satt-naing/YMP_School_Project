type SubmitButtonProps = {
    text : string;
}

function SubmitButton({ text } : SubmitButtonProps) {

  return (
    <button type="button" className="btn btn-success w-100">
      {text}
    </button>
  );
}

export default SubmitButton;
