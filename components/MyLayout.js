import Link from "next/link";
const MyLayout = props => (
  <div>
    <h1>
      <Link href="/">
        <a>Hacker News</a>
      </Link>
    </h1>
    {props.children}
  </div>
);

export default MyLayout;
