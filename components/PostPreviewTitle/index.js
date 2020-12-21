import Link from "next/link";

export default function PostPreviewTitle({ slug, title }) {
    return (
        <Link as={`/posts/${slug}`} href={`/posts/${slug}`}>
            <a className="text-m font-bold no-underline sm:text-2xl hover:underline">
                {title}
            </a>
        </Link>
    );
}
