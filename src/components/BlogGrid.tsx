import { Blog } from "../data/blogs";

export default function BlogGrid({ blogs, maxItems }: { blogs?: Blog[], maxItems?: number }) {
  const currentBlogs = blogs?.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {currentBlogs?.slice(0, maxItems).map((blog, idx) => (
        <div key={idx} className="col-lg-4 col-md-6 wow fadeInUp h-full" data-wow-delay="0.2s">
          <div className="blog-item">
            <div className="blog-img">
              <img src={blog.image} alt={blog.title} />
            </div>
            <div className="blog-title">
              <h3>{blog.title}</h3>
              <a className="btn" href={`/single/${blog.id}`}>+</a>
            </div>
            <div className="blog-meta">
              <p>By <a href="#">Admin</a></p>
              <p>In <a href="#">{blog.category}</a></p>
            </div>
            <div className="blog-text">
              <p>{blog.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}