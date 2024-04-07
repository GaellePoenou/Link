import GridPostList from "@/components/shared/GridPostList";
import Loader from "@/components/shared/Loader";
import { useGetCurrentUser } from "@/lib/react-query/queriesAndMutations";


const LikedPosts = () => {
  const { data: currentUser } = useGetCurrentUser();

  if (!currentUser)
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );

  return (
    <div className="explore-container">
      <div className="flex-between w-full max-w-5xl mt-16 mb-7">
        <h2 className="h3-bold md:h2-bold w-full">Publications Likées</h2>
        <div className="flex-center gap-3 bg-dark-3 rounded-xl px-4 py-2 cursor-pointer">
          <p className="small-medium md:base-medium text-light-2">Tout</p>
          <img
            src="/assets/icons/filter.svg"
            width={20}
            height={20}
            alt="filter"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-9 w-full max-w-5xl">

        <GridPostList posts={currentUser.liked} showStats={false} />
      </div>
      <div className="flex flex-wrap gap-9 w-full max-w-5xl">
        {currentUser.liked.length === 0 && (
          <p className="text-light-4">Aucune publication likée</p>
        )}
      </div>
    </div>
  );

};

export default LikedPosts;