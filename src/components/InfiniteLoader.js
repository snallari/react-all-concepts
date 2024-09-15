import { useAPICont } from "./SampleDataProvider";

function InfiniteLoader() {

    const { sai } = useAPICont()

    const { post, loading } = sai
    console.log("post", post, loading)
    return (!loading?<div><h1>Hi shruti you got this</h1>
        <div>{post.map((p) => <ul id={p.id}><ol>{p.title}</ol></ul>)}</div>
        </div>:"not")
}
    export default InfiniteLoader;