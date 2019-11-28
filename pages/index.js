import Layout from "../components/Layout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Entity from "../components/Entity";
// const api = `https://hacker-news.firebaseio.com/v0`;
const api = `https://api.hackerwebapp.com`;
const maxStories = 30;

const List = props => <ol>{props.children}</ol>;

const Index = props => (
  <Layout title="Hacker News">
    <List>
      {props.topStories.map(item => (
        <Entity item={item} key={item.id} />
      ))}
    </List>
  </Layout>
);
Index.getInitialProps = async function() {
  const res = await fetch(`${api}/news?page=1`);
  const data = await res.json();

  return { topStories: data };
};

export default Index;
