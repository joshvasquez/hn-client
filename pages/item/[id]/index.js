import { useRouter } from "next/router";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Layout from "../../../components/Layout";
import Entity from "../../../components/Entity";
import UserLink from "../../../components/UserLink";

const api = `https://api.hackerwebapp.com`;

// recursively loops through to nest all comments
function Comments(props) {
  const comments = props.comments;
  return (
    <ul>
      {comments.map(function(item) {
        const content = { __html: item.content };
        return (
          <li className="comment">
            <UserLink id={item.user}>{item.user}</UserLink>
            <div dangerouslySetInnerHTML={content} />
            {item.comments ? <Comments comments={item.comments} /> : null}
          </li>
        );
      })}
    </ul>
  );
}

const Story = props => {
  return (
    <Layout>
      <Entity item={props.story} />

      <Comments comments={props.story.comments} />
    </Layout>
  );
};

Story.getInitialProps = async function({ res, query }) {
  const result = await fetch(`${api}/item/${query.id}`);
  const data = await result.json();
  console.log(data.comments);
  return { story: data };
};

export default Story;
