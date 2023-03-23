function Card({ image, caption, select }) {
  return (
    <div className="Card">
      <img src={image} alt={caption} onClick={() => select()} />
      <div className="caption">{caption}</div>
    </div>
  );
}

export default Card;
