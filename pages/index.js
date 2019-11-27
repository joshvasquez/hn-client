import Layout from "../components/MyLayout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
const api = `https://hacker-news.firebaseio.com/v0`;
const maxStories = 30;

function Item(props) {
  const item = props.item;

  return (
    <li style={{ marginTop: "1.5em" }}>
      <a href={item.url}>{item.title}</a>
      <ul>
        <li>{item.score} points</li>
        <li>
          by{" "}
          <a href={`https://news.ycombinator.com/user?id=${item.by}`}>
            {item.by}
          </a>
        </li>
        <li>at {Date(item.time).toString()}</li>
        <li>
          <a href={`https://news.ycombinator.com/item?id=${item.id}`}>
            {item.descendants} comments
          </a>
        </li>
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

const List = props => <ol>{props.children}</ol>;

const Index = props => (
  <Layout>
    <h1>Hacker News</h1>

    <List>
      {props.topStories.map(item => (
        <Item item={item} />
      ))}
    </List>
  </Layout>
);
Index.getInitialProps = async function() {
  const res = await fetch(`${api}/topstories.json`);
  const data = await res.json();
  const stories = new Array();

  // is there another way to fetch all the data rather than doing individual fetch requests for each story?
  for (let i = 0; i < maxStories; i++) {
    const story = await fetch(`${api}/item/${data[i]}.json`);
    const storyData = await story.json();
    stories.push(storyData);
  }
  return { topStories: stories };
};

export default Index;
