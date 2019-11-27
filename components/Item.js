import Link from "next/link";

// these could be one component
const ItemLink = props => (
  <li>
    <Link href="/story/[id]" as={`/story/${props.id}`}>
      <a>{props.comments} comments</a>
    </Link>
  </li>
);
const UserLink = props => (
  <li>
    <Link href="/user/[id]" as={`/user/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

function Item(props) {
  const item = props.item;

  return (
    <li style={{ marginTop: "1.5em" }}>
      <a href={item.url}>{item.title}</a>

      <ul>
        <li>{item.points} points</li>
        <UserLink id={item.user} />
        <li>{item.time_ago} ago</li>
        <ItemLink id={item.id} comments={item.comments_count} />
      </ul>
    </li>
  );
}

export default Item;
