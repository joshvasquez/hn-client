import { useRouter } from "next/router";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Layout from "../../../components/MyLayout";
import Item from "../../../components/Item";
const api = `https://api.hackerwebapp.com`;

const Story = props => {
  return (
    <Layout>
      <Item item={props.story} />
    </Layout>
  );
};

Story.getInitialProps = async function({ res, query }) {
  const result = await fetch(`${api}/item/${query.id}`);
  const data = await result.json();
  console.log(data);
  return { story: data };
};

export default Story;
