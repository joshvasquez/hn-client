import Link from "next/link";
import UserLink from "../components/UserLink";

// these could be one component
const ItemLink = props => (
  <li>
    <Link href="/story/[id]" as={`/story/${props.id}`}>
      <a>{props.children}</a>
    </Link>
  </li>
);

function Item(props) {
  const item = props.item;

  return (
    <li style={{ marginTop: "1.5em" }}>
      {item.type == "ask" ? (
        <ItemLink id={item.id} comments={item.comments_count}>
          {item.title}
        </ItemLink>
      ) : (
        <a href={item.url}>{item.title}</a>
      )}

      <ul>
        <li>{item.points} points</li>
        <UserLink id={item.user} />
        <li>{item.time_ago} ago</li>
        <ItemLink id={item.id} comments={item.comments_count}>
          {item.comments_count} comments
        </ItemLink>
      </ul>
    </li>
  );
}

export default Item;
