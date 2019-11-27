import Link from "next/link";

const UserLink = props => (
  <Link href="/user/[id]" as={`/user/${props.id}`}>
    <a>{props.children}</a>
  </Link>
);

export default UserLink;
