function Blog({posts}) {
  if (!posts) {
    return 'loading';
  }
  return (
    <>
      <h3>Name: {posts.name}</h3>
      <h4>Total API hit: {posts.count}</h4>
    </>
  )
}

export async function getStaticProps({params}) {
  try {
    const {name} = params;
    const res = await fetch(`http://localhost:8080/${name}`)
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

export async function getStaticPaths() {
  return {
    paths: [{
      params: {
        name: 'sdf'
      }
    }],
    fallback: "blocking", //false or "blocking" // See the "fallback" section below
  };
}

export default Blog
