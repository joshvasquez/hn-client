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
	  <>
          <li className="comment">
            <UserLink id={item.user}>{item.user}</UserLink>
            <div dangerouslySetInnerHTML={content} />
	    <div><a href={ `https://news.ycombinator.com/reply?id=${item.id}` }>reply</a></div>
          </li>
            {item.comments ? <Comments comments={item.comments} /> : null}
	  </>
        );
      })}
    </ul>
  );
}

const Story = props => {
  return (
    <Layout title={props.story.title}>
      <Entity item={props.story} />

      <Comments comments={props.story.comments} />
    </Layout>
  );
};

Story.getInitialProps = async function({ res, query }) {
  const result = await fetch(`${api}/item/${query.id}`);
  const data = await result.json();
  return { story: data };
};

export default Story;
