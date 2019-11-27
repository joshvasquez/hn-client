import { useRouter } from "next/router";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Layout from "../../../components/MyLayout";
import Item from "../../../components/Item";
const api = `https://api.hackerwebapp.com`;

// recursively loops through to nest all comments
function Comments(props) {
  const comments = props.comments;
  return (
    <ul>
      {comments.map(function(item) {
        const content = { __html: item.content };
        return (
          <li>
            <h1>{item.user}</h1>
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
      <Item item={props.story} />

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
