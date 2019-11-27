import Link from "next/link";

const color = "black";
const background = "white";
const Layout = props => (
  <div>
    <h1>
      <Link href="/">
        <a>Hacker News</a>
      </Link>
    </h1>
    {props.children}
    <style global jsx>
      {`
        body {
          background: ${background};
          color: ${color};
        }
        a {
        }
        h1 {
          font-size: 1.5em;
        }
      `}
    </style>
  </div>
);

export default Layout;
