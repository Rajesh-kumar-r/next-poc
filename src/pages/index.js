function Blog({posts}) {

  return (
    <>
      <h3>Name: {posts.name}</h3>
      <h4>Total API hit: {posts.count}</h4>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:8080/initial');
  const {data} = await res.json();

  return {
    props: {
      posts: data,
    },
  }
}


export default Blog
