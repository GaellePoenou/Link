
import GridPostList from "./GridPostList";
import Loader from "./Loader";

export type SearchResultProps = {
  isSearchFetching: boolean;
  //searchedPosts: any;
  searchedPosts: any;
};
const SearchResults = ({ isSearchFetching, searchedPosts }: SearchResultProps) => {
  console.log("Contenu de searchedPosts :", searchedPosts);
  //console.log('isSearchFetching:', isSearchFetching);
  console.log('searchedPosts:', searchedPosts);

  if (isSearchFetching)
    return <Loader />;

  if (searchedPosts && searchedPosts.documents && searchedPosts.documents.length > 0) {
    return <GridPostList posts={searchedPosts.documents} />;
  } else {
    return (
      <p className="text-light-4 mt-10 text-center w-full">Aucun Résultat</p>
    );
  }
};

export default SearchResults