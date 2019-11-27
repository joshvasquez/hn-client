import Layout from "../components/MyLayout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Item from "../components/Item";
// const api = `https://hacker-news.firebaseio.com/v0`;
const api = `https://api.hackerwebapp.com`;
const maxStories = 30;

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
  const res = await fetch(`${api}/news`);
  const data = await res.json();

  return { topStories: data };
};

export default Index;
