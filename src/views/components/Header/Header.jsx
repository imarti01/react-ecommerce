import "./Header.scss";

export const Header = ({ title }) => {
  return (
    <div className="header">
      <h2 className="header__title">{title}</h2>
    </div>
  );
};
