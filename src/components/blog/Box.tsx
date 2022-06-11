import './box.scss';


export const Box = () => {

  return (
    <div className="box__blog">
      <div className="image">
        <img src='https://wallas5h.github.io/photos_bookshop/images/blog-1.jpg' alt="" />
      </div>
      <div className="content">
        <h3>blog title goes here</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
        <a href="#" className="btn">read more</a>
      </div>
    </div>
  )
}