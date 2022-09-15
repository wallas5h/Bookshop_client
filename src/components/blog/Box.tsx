import "./box.scss";

interface Props {
  img: string;
  title: string;
  description: string;
  link: string;
}

export const Box = ({ img, title, description, link }: Props) => {
  return (
    <div className="box__blog" onClick={() => window.open(link, "_blank")}>
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
