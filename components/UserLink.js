import Link from "next/link";

const UserLink = props => (
  <li>
    <Link href="/user/[id]" as={`/user/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

export default UserLink;
