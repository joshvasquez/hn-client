import Link from "next/link";

const ItemLink = props => (
  <li>
    <Link href="/story/[id]" as={`/story/${props.id}`}>
      {/* {props.comments} comments */}
      <a>{props.comments} comments</a>
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
        <li>
          by{" "}
          <a href={`https://news.ycombinator.com/user?id=${item.user}`}>
            {item.user}
          </a>
        </li>
        <li>{item.time_ago} ago</li>
        <ItemLink id={item.id} comments={item.comments_count} />
      </ul>
      <style jsx>
        {`
          ol > li {
            list-style-type: default;
          }
          ul > li {
            list-style-type: none;
            display: inline;
            padding: 0.2em;
          }
        `}
      </style>
    </li>
  );
}

export default Item;
