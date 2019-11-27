import Layout from "../../components/Layout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Entity from "../../components/Entity";
const api = `https://api.hackerwebapp.com`;

const List = props => <ol>{props.children}</ol>;

const Index = props => (
  <Layout>
    <List>
      {props.topStories.map(item => (
        <Entity item={item} key={item.id} />
      ))}
    </List>
  </Layout>
);
Index.getInitialProps = async function({ query }) {
  const res = await fetch(`${api}/news?page=${query.id}`);
  const data = await res.json();

  return { topStories: data };
};

export default Index;
