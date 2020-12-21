export default function PostOn({ date }) {
    return (
        <div className="self-start space-x-2 bg-card rounded-full px-3 py-1 border">
            <span>On</span><span className="font-bold">{date}</span>
        </div>
    );
}
