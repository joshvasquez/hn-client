import Listing, { getProps } from "./[id]/index";

const Index = props => (
  <Listing topStories={props.topStories} currentPage={props.currentPage} />
);

// gets topStories
Index.getInitialProps = async function(context) {
  return getProps(context);
};
export default Index;
