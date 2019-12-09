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
  const content = { __html: item.content };

  // hacky - should probably have everything be a basic entity since all items on the api are mostly the same thing.

  return (
    <>
      <span>{item.num}{item.num? ". ":""}</span>
      {item.type == "ask" ? (
        <ItemLink id={item.id} comments={item.comments_count}>
          {item.title}
        </ItemLink>
      ) : item.url.includes(item.id) ? (
        <a href={`https://news.ycombinator.com/${item.url}`}>{item.title}</a>
      ) : (
        <a href={item.url}>{item.title}</a>
      )}
      <div>
        <span>{item.points} points</span> |{" "}
        <span>
          <UserLink id={item.user}>{item.user}</UserLink>
        </span>{" "}
        | <span>{item.time_ago} ago</span>
        <span>
          {" "}
          |{" "}
          <ItemLink id={item.id} comments={item.comments_count}>
            {item.comments_count} comments
          </ItemLink>
        </span>
      </div>
      <div dangerouslySetInnerHTML={content}></div>
    </>
  );
}
export default Entity;
