import { useParams } from "react-router-dom";
import posts from "../../data/single-post"; // file dummy kamu
import blogs from "../../data/blogs";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  text: string;
  cover: string;
  date: string;
  author: {
    name: string;
    image: string;
    description: string;
  };
  tags: string[];
  comments: {
    name: string;
    image: string;
    text: string;
    date: string;
  }[];
}
interface recentPost {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  author?: {
    name: string;
    image: string;
  };
}
const Single = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  const [recentPosts, setRecentPosts] = useState<recentPost[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [categoriesWithCounts, setCategoriesWithCounts] = useState<{ category: string; count: number }[]>([]);
  const [featuredPosts, setFeaturedPosts] = useState<recentPost[]>([]);
  const [popularPosts, setPopularPosts] = useState<recentPost[]>([]);
  const [latestPosts, setLatestPosts] = useState<recentPost[]>([]);
  const [activeTab, setActiveTab] = useState("featured");

  const tabData: { [key: string]: recentPost[] } = {
    featured: featuredPosts,
    popular: popularPosts,
    latest: latestPosts,
  };
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = date.toLocaleString("en-US", { month: "short" }); // Jan, Feb, etc.
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };
  useEffect(() => {
    const foundPost = posts.find((post: Post) => post.id === Number(id));
    if (foundPost) {
      setPost(foundPost);
      console.log(foundPost.comments);
    }

    const latest_posts = blogs
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5)
      .map((blog) => {
        const postAuthor = posts.find((p) => p.id === blog.id)?.author;
        return {
          ...blog,
          author: postAuthor ? { name: postAuthor.name, image: postAuthor.image } : undefined,
        };
      });
    setLatestPosts(latest_posts);

    const popular_posts = blogs
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5)
      .map((blog) => {
        const postAuthor = posts.find((p) => p.id === blog.id)?.author;
        return {
          ...blog,
          author: postAuthor ? { name: postAuthor.name, image: postAuthor.image } : undefined,
        };
      });
    setPopularPosts(popular_posts);

    const featured_posts = blogs
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5)
      .map((blog) => {
        const postAuthor = posts.find((p) => p.id === blog.id)?.author;
        return {
          ...blog,
          author: postAuthor ? { name: postAuthor.name, image: postAuthor.image } : undefined,
        };
      });
    setFeaturedPosts(featured_posts);

    const relatedPosts = posts.filter((post: Post) => post.id !== foundPost?.id && post.tags.includes(foundPost?.tags[0] || ""));
    setRelatedPosts(relatedPosts);

    const recentposts = blogs
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5)
      .map((blog) => {
        const postAuthor = posts.find((p) => p.id === blog.id)?.author;
        return {
          ...blog,
          author: postAuthor ? { name: postAuthor.name, image: postAuthor.image } : undefined,
        };
      });
    setRecentPosts(recentposts);

    // Kumpulkan semua tags unik dari posts
    const uniqueTags = Array.from(new Set(posts.flatMap((post) => post.tags)));
    setAllTags(uniqueTags);

    const counts: { [key: string]: number } = {};

    blogs.forEach((post) => {
      const category = post.category;
      counts[category] = (counts[category] || 0) + 1;
    });

    const mergedCategories = Object.entries(counts).map(([category, count]) => ({
      category,
      count,
    }));

    setCategoriesWithCounts(mergedCategories);
    console.log(mergedCategories);
  }, [id]);

  // Inisialisasi Owl setelah data ter-set dan DOM siap
  useEffect(() => {
    if (relatedPosts.length > 0 && (window as any).$) {
      setTimeout(() => {
        const $ = (window as any).$;
        const $carousel = $(".owl-carousel");
        if ($carousel.length > 0 && $carousel.owlCarousel) {
          $carousel.trigger("destroy.owl.carousel"); // optional: destroy previous if any
          $carousel.owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            dots: true,
            navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
            responsive: {
              0: { items: 1 },
              768: { items: 2 },
              992: { items: 3 },
            },
          });
        }
      }, 100);
    }
  }, [relatedPosts]);

  if (!post) {
    return (
      <div className="container mt-5">
        <h2>Blog not found.</h2>
      </div>
    );
  }
  return (
    <>
      {/* <!-- Page Header Start --> */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Single Page</h2>
            </div>
            <div className="col-12">
              <a href="/">Home</a>
              <a href="">Single Page</a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      {/* <!-- Single Post Start--> */}
      <div className="single">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="single-content wow fadeInUp">
                <img src={post.cover} />
                <h2>{post.title}</h2>
                <div className="mb-4 blog-detail" dangerouslySetInnerHTML={{ __html: post.text }} />
              </div>
              <div className="single-tags wow fadeInUp">
                {post.tags &&
                  post.tags.map((tag, index) => (
                    <a key={index} href={`/single?tag=${tag}`}>
                      {tag}
                    </a>
                  ))}
              </div>
              <div className="single-bio wow fadeInUp">
                <div className="single-bio-img">
                  <img src={`${post.author.image}`} />
                </div>
                <div className="single-bio-text">
                  <h3>{post.author.name}</h3>
                  <p>{post.author.description}</p>
                </div>
              </div>
              {relatedPosts.length > 0 && (
                <div className="single-related wow fadeInUp">
                  <h2>Related Post</h2>
                  {relatedPosts.length > 3 ? (
                    <div className="owl-carousel related-slider">
                      {relatedPosts.map((post, index) => (
                        <div className="post-item" key={index}>
                          <div className="post-img">
                            <img src={`${post.cover}`} />
                          </div>
                          <div className="post-text">
                            <a href="">{post.title}</a>
                            <div className="post-meta">
                              <p>
                                By<a href="">{post.author.name}</a>
                              </p>
                              <p>
                                In<a href="">{post.tags[0]}</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    relatedPosts.map((post, index) => (
                      <div className="post-item" key={index}>
                        <div className="post-img">
                          <img src={`${post.cover}`} />
                        </div>
                        <div className="post-text">
                          <a href="">{post.title}</a>
                          <div className="post-meta">
                            <p>
                              By<a href="">{post.author.name}</a>
                            </p>
                            <p>
                              In<a href="">{post.tags[0]}</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
              <div className="single-comment wow fadeInUp">
                <h2>{post.comments.length} Comments</h2>
                <ul className="comment-list">
                  {post.comments.map((comment, index) => (
                    <li key={index} className="comment-item">
                      <div className="comment-body">
                        <div className="comment-img">
                          <img src={comment.image} />
                        </div>
                        <div className="comment-text">
                          <h3>
                            <a href="">{comment.name}</a>
                          </h3>
                          <span>{formatDate(comment.date)}</span>
                          <p>{comment.text}</p>
                          <a className="btn" href="">
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="comment-form wow fadeInUp">
                <h2>Leave a comment</h2>
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input type="text" className="form-control" id="name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="website">Website</label>
                    <input type="url" className="form-control" id="website" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea id="message" cols={30} rows={5} className="form-control"></textarea>
                  </div>
                  <div className="form-group">
                    <input type="submit" value="Post Comment" className="btn" />
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="sidebar">
                <div className="sidebar-widget wow fadeInUp">
                  <div className="search-widget">
                    <form>
                      <input className="form-control" type="text" placeholder="Search Keyword" />
                      <button className="btn">
                        <i className="fa fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div>

                <div className="sidebar-widget wow fadeInUp">
                  <h2 className="widget-title">Recent Post</h2>
                  <div className="recent-post">
                    {recentPosts.map((post, index) => (
                      <div key={index} className="post-item">
                        <div className="post-img">
                          <img src={post.image} />
                        </div>
                        <div className="post-text">
                          <a href="">{post.title}</a>
                          <div className="post-meta">
                            <p>
                              By<a href="">{post.author?.name}</a>
                            </p>
                            <p>
                              In<a href="">{post.category}</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="sidebar-widget wow fadeInUp">
                  <div className="image-widget">
                    <a href="#">
                      <img src="/img/blog-1.jpg" alt="Image" />
                    </a>
                  </div>
                </div>

                <div className="sidebar-widget wow fadeInUp">
                  <div className="tab-post">
                    <ul className="nav nav-pills nav-justified">
                      {["featured", "popular", "latest"].map((tab, index) => (
                        <li className="nav-item" key={index}>
                          <a className={`nav-link ${activeTab === tab ? "active" : ""}`} onClick={() => setActiveTab(tab)} href="#">
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                          </a>
                        </li>
                      ))}
                    </ul>

                    <div className="tab-content">
                      <div className="container tab-pane active">
                        {tabData[activeTab]?.map((post) => (
                          <div className="post-item" key={post.id}>
                            <div className="post-img">
                              <img src={post.image } />
                            </div>
                            <div className="post-text">
                              <a href={`/single/${post.id}`}>{post.title}</a>
                              <div className="post-meta">
                                <p>
                                  By<a href="">{post.author?.name || "Admin"}</a>
                                </p>
                                <p>
                                  In<a href="">{post.category }</a>
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sidebar-widget wow fadeInUp">
                  <div className="image-widget">
                    <a href="#">
                      <img src="/img/blog-2.jpg" alt="Image" />
                    </a>
                  </div>
                </div>

                <div className="sidebar-widget wow fadeInUp">
                  <h2 className="widget-title">Categories</h2>
                  <div className="category-widget">
                    <ul>
                      {categoriesWithCounts.map((item) => (
                        <li>
                          <a href={`/blogs?category=${item.category}`}>{item.category}</a>
                          <span>({item.count})</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="sidebar-widget wow fadeInUp">
                  <div className="image-widget">
                    <a href="#">
                      <img src="img/blog-3.jpg" alt="Image" />
                    </a>
                  </div>
                </div>

                <div className="sidebar-widget wow fadeInUp">
                  <h2 className="widget-title">Tags Cloud</h2>
                  <div className="tag-widget">
                    {allTags.map((tag) => (
                      <a href={`/blog?tag=${tag}`}>{tag}</a>
                    ))}
                  </div>
                </div>

                <div className="sidebar-widget wow fadeInUp">
                  <h2 className="widget-title">Text Widget</h2>
                  <div className="text-widget">
                    <p>Lorem ipsum dolor sit amet elit. Integer lorem augue purus mollis sapien, non eros leo in nunc. Donec a nulla vel turpis tempor ac vel justo. In hac platea nec eros. Nunc eu enim non turpis id augue.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Single Post End-->    */}
    </>
  );
};

export default Single;
