import useFetch from "../hooks/useFetch";

function FetchExample() {
    const { data, loading, error } =
    useFetch(
        "https://jsonplaceholder.typicode.com/posts/1"
    );
    if (loading) return <p>იტვირთება...</p>
    if (error) return <p>შეცდომა: {error}</p>

    return (
        <article>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
        </article>
    )
}
export default FetchExample;