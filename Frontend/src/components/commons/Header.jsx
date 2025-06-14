import { Link } from "react-router";

const Header = () => {
  const links = [
    {
      name: "Buy instagram likes",
      url: "/insta-likes",
    },
    {
      name: "Buy instagram followers",
      url: "/insta-followers",
    },
    {
      name: "Buy instagram comments",
      url: "/insta-comments",
    },
    {
      name: "Buy instagram views",
      url: "/insta-views",
    },
    {
      name: "FAQs",
      url: "#",
    },
    {
      name: "Contact Us",
      url: "#",
    },
    {
      name: "Login",
      url: "#",
    },
  ];
  return (
    <div className="header-container">
      <div className="nav-container space-between">
        <p className="header-logo">Logo</p>
        <div className="header-links-container">
          {links.map((link, index) => (
            <Link to={link.url} key={index} className="pointer header-link hover:text-gradient">
              {link.name}
            </Link>
          ))}
          <p className="sign-up-button pointer">Signup</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
