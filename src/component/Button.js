export default function Button(props) {
  return (
      <div style={{width:"60px",float:"left"}} className={props.className1}>
          <h1>{props.Butonlar}</h1>
    <button onClick={props.derya} className={props.style}>
      {props.name}
    </button>
    <h2>{props.Aciklama}</h2>
    </div>
  );
}
