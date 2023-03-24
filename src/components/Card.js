function Card({ image, caption, select }) {
  return (
    <article className="Card">
      <img src={image} alt={caption} onClick={() => select()} />
      <div>{caption}</div>
    </article>
  );
}

export default Card;
