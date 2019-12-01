import Layout from "../../components/Layout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Entity from "../../components/Entity";
const api = `https://api.hackerwebapp.com`;

function Listing(props) {
  let nextPage = props.currentPage + 1;
  let prevPage = props.currentPage - 1;
  // if it's going back to page 1 it should go back to the home page rather that /1
  if (prevPage == 1) prevPage = "";
  let currentPage = props.currentPage;
  return (
    <Layout>
      {props.topStories.map(item => (
        <Entity item={item} key={item.id} num={item.num} />
      ))}
      {currentPage >= 2 ? (
        <Link href={`/${prevPage}`}>
          <a>Prev</a>
        </Link>
      ) : (
        ""
      )}{" "}
      {currentPage}{" "}
      <Link href={`/${nextPage}`}>
        <a>Next</a>
      </Link>
    </Layout>
  );
}

async function getProps(context) {
  let { id } = context.query;

  //front page needs numbers as well
  if (typeof id === "undefined") id = 1;

  const res = await fetch(`${api}/news?page=${id}`);
  let data = await res.json();

  // default
  const maxResults = 30;
  let multiplier = Math.abs(id - 1) * maxResults;
  if (multiplier < 0) multiplier = 0;
  data.map((item, id) => {
    item.num = id + 1 + multiplier;
  });
  id = parseInt(id);

  return {
    topStories: data,
    currentPage: id
  };
}
Listing.getInitialProps = async function(context) {
  return getProps(context);
};

export default Listing;
export { getProps };
