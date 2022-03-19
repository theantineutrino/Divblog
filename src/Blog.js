import "./index.css";
function Blog(prop) {
  return (
    <div className="m-5 ">
      <div>
        <h1 className="px-4 rounded font-mono text-2xl">{prop.title}</h1>
      </div>
      <div className="flex">
        <div className="bg-blue-200 px-4 rounded p-10 m-20">
          <p>{prop.cont}</p>
        </div>
      </div>
    </div>
  );
}
export default Blog;
