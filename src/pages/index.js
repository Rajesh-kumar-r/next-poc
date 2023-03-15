function Blog({posts}) {

  return (
    <>
      <h3>Name: {posts.name}</h3>
      <h4>Total API hit: {posts.count}</h4>
    </>
  )
}

export async function getStaticProps() {
  try {
    const res = await fetch('https://node-demo-next.onrender.com/initial');
    const {data} = await res.json();

    return {
      props: {
        posts: data,
      },
    }
  } catch (e) {
    return {
      props: {
        posts: {name: 'failed', count: 0},
      },
    }
  }
}


export default Blog
