import Link from "next/link";

const Layout = props => (
  <>
    <head>
      <title>{props.title}</title>
    </head>
    <h1>
      <Link href="/">
        <a>Hacker News</a>
      </Link>
    </h1>
    {props.children}
  </>
);

export default Layout;
