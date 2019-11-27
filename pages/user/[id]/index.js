import { useRouter } from "next/router";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Layout from "../../../components/MyLayout";
import Item from "../../../components/Item";
const api = `https://api.hackerwebapp.com`;

const User = props => {
  return (
    <Layout>
      <h1>{props.user.id}</h1>
      <div>karma: {props.user.karma}</div>
      <div>User created {props.user.created}</div>
    </Layout>
  );
};

User.getInitialProps = async function({ res, query }) {
  const result = await fetch(`${api}/user/${query.id}`);
  const data = await result.json();
  console.log(data);
  return { user: data };
};

export default User;
