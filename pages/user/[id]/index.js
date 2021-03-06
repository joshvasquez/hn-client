import { useRouter } from "next/router";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Layout from "../../../components/Layout";
import Entity from "../../../components/Entity";
// const api = `https://api.hackerwebapp.com`;
const api = `https://hacker-news.firebaseio.com/v0/`;

function User(props) {
  const about = { __html: props.user.about };
  return (
    <Layout title={`Profile: ${props.user.id} | Hacker News`}>
      <h1>{props.user.id}</h1>
      <div>karma: {props.user.karma}</div>
      <div>created: {Date(props.user.created)}</div>
      <div dangerouslySetInnerHTML={about}></div>
    </Layout>
  );
}

User.getInitialProps = async function({ res, query }) {
  const result = await fetch(`${api}/user/${query.id}.json`);
  const data = await result.json();
  return { user: data };
};

export default User;
