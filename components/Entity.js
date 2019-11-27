import Link from "next/link";
import UserLink from "../components/UserLink";

// these could be one component
const ItemLink = props => (
  <>
    <Link href="/item/[id]" as={`/item/${props.id}`}>
      <a>{props.children}</a>
    </Link>
  </>
);

function Entity(props) {
  const item = props.item;

  return (
    <li>
      {item.type == "ask" ? (
        <ItemLink id={item.id} comments={item.comments_count}>
          {item.title}
        </ItemLink>
      ) : (
        <a href={item.url}>{item.title}</a>
      )}
      <div>
        <span>{item.points} points</span>
        <span>
          <UserLink id={item.user}>{item.user}</UserLink>
        </span>
        <span>{item.time_ago} ago</span>
        <span>
          <ItemLink id={item.id} comments={item.comments_count}>
            {item.comments_count} comments
          </ItemLink>
        </span>
      </div>
      <style jsx>{`
        span::before {
          content: " | ";
        }
        span:first-of-type::before {
          content: "";
        }
        span:first-of-type {
          padding-left: 0;
        }
      `}</style>
    </li>
  );
}

export default Entity;
