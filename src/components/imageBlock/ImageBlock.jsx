
function ImageBlock({imgSrc, pt}) {
  return (
    <div className="image-block" style={{ paddingTop: pt }}>
      <figure>
        <img className="postImg" src={imgSrc} alt="" />
      </figure>
    </div>
  );
}
export default ImageBlock