import Link from "next/link";

export default function HomeHeader({ theme, handleThemeToggle }) {
    return (
        <div className="max-w-6xl mx-auto border-b">
            <div className="flex flex-row items-center justify-between p-4">
                <Link href="/" passHref>
                    <a className="w-8 h-8 text-2xl font-bold">
                        Exammaterials
                    </a>
                </Link>
                <div
                    className="w-8 h-8 p-2 rounded-md cursor-pointer bg-code-block"
                    onClick={handleThemeToggle}
                >
                    <img
                        className="object-contain w-full h-full"
                        src={
                            theme == "dark"
                                ? "/assets/toggle/sunny.png"
                                : "/assets/toggle/moon.png"
                        }
                        alt="sunny icon"
                    />
                </div>
            </div>
        </div>
    );
}
