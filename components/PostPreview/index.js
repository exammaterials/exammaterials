import PostDetails from "../PostDetails";
import PostExcerpt from "../PostExcerpt";
import PostPreviewTitle from "../PostPreviewTitle";

export default function PostPreview({ post }) {
    return (
        <div className="flex flex-col my-4 space-y-3 px-8 py-3 rounded-lg border-2 border-gray-400 bg-card mx-auto w-full lg:w-3/4 md:w-8/12">
            <PostPreviewTitle slug={post.slug} title={post.title} />
            <PostDetails author={post.author} date={post.date} />
            <PostExcerpt excerpt={post.excerpt} />
        </div>
    );
}
