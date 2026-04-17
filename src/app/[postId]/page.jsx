
import Details from "@/component/Details";

const AllDataDetailsPage = async ({ params }) => {
    const { postId } = await params;
    const res = await fetch(`https://my-assignment-app-tau.vercel.app/data.json`);
    const posts = await res.json();
    const post = posts.find(p => p.id === parseInt(postId));

    return (
        <div className="py-20">
                <Details post={post} ></Details>
        </div>
    );
};

export default AllDataDetailsPage;