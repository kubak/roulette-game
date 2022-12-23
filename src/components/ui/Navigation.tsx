import { Link } from "react-router-dom";

const pages = [
  {
    name: "Roulette",
    href: "/",
  },
  {
    name: "Author",
    href: "/author",
  },
];

const Navigation = () => {
  return (
    <div>
      <ul className="flex gap-x-8 justify-end mx-14 mt-12">
        {pages.map((singlePage) => {
          const { name, href } = singlePage;
          return (
            <li key={name} className="text-xl font-bold">
              <Link to={href}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
