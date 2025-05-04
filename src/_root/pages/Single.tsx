import { useParams } from "react-router-dom";
import posts from "../../data/single-post"; // file dummy kamu
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
const Single = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);

  useEffect(() => {
    const foundPost = posts.find((post: Post) => post.id === Number(id));
    if (foundPost) {
      setPost(foundPost);
      console.log(foundPost);
    }

    const relatedPosts = posts.filter((post: Post) => post.id !== foundPost?.id && post.tags.includes(foundPost?.tags[0] || ""));
    setRelatedPosts(relatedPosts);
    console.log("relatedPosts", relatedPosts);
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
                <img src="img/single.jpg" />
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
                  <div className="owl-carousel related-slider">
                    {relatedPosts.map((post, index) => (
                      <div className="post-item" key={index}>
                        <div  className="post-img">
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
                </div>
              )}

              <div className="single-comment wow fadeInUp">
                <h2>3 Comments</h2>
                <ul className="comment-list">
                  <li className="comment-item">
                    <div className="comment-body">
                      <div className="comment-img">
                        <img src="img/user.jpg" />
                      </div>
                      <div className="comment-text">
                        <h3>
                          <a href="">Josh Dunn</a>
                        </h3>
                        <span>01 Jan 2045 at 12:00pm</span>
                        <p>Lorem ipsum dolor sit amet elit. Integer lorem augue purus mollis sapien, non eros leo in nunc. Donec a nulla vel turpis tempor ac vel justo. In hac platea dictumst.</p>
                        <a className="btn" href="">
                          Reply
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="comment-item">
                    <div className="comment-body">
                      <div className="comment-img">
                        <img src="img/user.jpg" />
                      </div>
                      <div className="comment-text">
                        <h3>
                          <a href="">Josh Dunn</a>
                        </h3>
                        <p>
                          <span>01 Jan 2045 at 12:00pm</span>
                        </p>
                        <p>Lorem ipsum dolor sit amet elit. Integer lorem augue purus mollis sapien, non eros leo in nunc. Donec a nulla vel turpis tempor ac vel justo. In hac platea dictumst.</p>
                        <a className="btn" href="">
                          Reply
                        </a>
                      </div>
                    </div>
                    <ul className="comment-child">
                      <li className="comment-item">
                        <div className="comment-body">
                          <div className="comment-img">
                            <img src="img/user.jpg" />
                          </div>
                          <div className="comment-text">
                            <h3>
                              <a href="">Josh Dunn</a>
                            </h3>
                            <p>
                              <span>01 Jan 2045 at 12:00pm</span>
                            </p>
                            <p>Lorem ipsum dolor sit amet elit. Integer lorem augue purus mollis sapien, non eros leo in nunc. Donec a nulla vel turpis tempor ac vel justo. In hac platea dictumst.</p>
                            <a className="btn" href="">
                              Reply
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
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
                    <div className="post-item">
                      <div className="post-img">
                        <img src="img/post-1.jpg" />
                      </div>
                      <div className="post-text">
                        <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                        <div className="post-meta">
                          <p>
                            By<a href="">Admin</a>
                          </p>
                          <p>
                            In<a href="">Design</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="post-item">
                      <div className="post-img">
                        <img src="img/post-2.jpg" />
                      </div>
                      <div className="post-text">
                        <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                        <div className="post-meta">
                          <p>
                            By<a href="">Admin</a>
                          </p>
                          <p>
                            In<a href="">Design</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="post-item">
                      <div className="post-img">
                        <img src="img/post-3.jpg" />
                      </div>
                      <div className="post-text">
                        <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                        <div className="post-meta">
                          <p>
                            By<a href="">Admin</a>
                          </p>
                          <p>
                            In<a href="">Design</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="post-item">
                      <div className="post-img">
                        <img src="img/post-4.jpg" />
                      </div>
                      <div className="post-text">
                        <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                        <div className="post-meta">
                          <p>
                            By<a href="">Admin</a>
                          </p>
                          <p>
                            In<a href="">Design</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="post-item">
                      <div className="post-img">
                        <img src="img/post-5.jpg" />
                      </div>
                      <div className="post-text">
                        <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                        <div className="post-meta">
                          <p>
                            By<a href="">Admin</a>
                          </p>
                          <p>
                            In<a href="">Design</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sidebar-widget wow fadeInUp">
                  <div className="image-widget">
                    <a href="#">
                      <img src="img/blog-1.jpg" alt="Image" />
                    </a>
                  </div>
                </div>

                <div className="sidebar-widget wow fadeInUp">
                  <div className="tab-post">
                    <ul className="nav nav-pills nav-justified">
                      <li className="nav-item">
                        <a className="nav-link active" data-toggle="pill" href="#featured">
                          Featured
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#popular">
                          Popular
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#latest">
                          Latest
                        </a>
                      </li>
                    </ul>

                    <div className="tab-content">
                      <div id="featured" className="container tab-pane active">
                        <div className="post-item">
                          <div className="post-img">
                            <img src="img/post-1.jpg" />
                          </div>
                          <div className="post-text">
                            <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            <div className="post-meta">
                              <p>
                                By<a href="">Admin</a>
                              </p>
                              <p>
                                In<a href="">Design</a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="post-item">
                          <div className="post-img">
                            <img src="img/post-2.jpg" />
                          </div>
                          <div className="post-text">
                            <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            <div className="post-meta">
                              <p>
                                By<a href="">Admin</a>
                              </p>
                              <p>
                                In<a href="">Design</a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="post-item">
                          <div className="post-img">
                            <img src="img/post-3.jpg" />
                          </div>
                          <div className="post-text">
                            <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            <div className="post-meta">
                              <p>
                                By<a href="">Admin</a>
                              </p>
                              <p>
                                In<a href="">Design</a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="post-item">
                          <div className="post-img">
                            <img src="img/post-4.jpg" />
                          </div>
                          <div className="post-text">
                            <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            <div className="post-meta">
                              <p>
                                By<a href="">Admin</a>
                              </p>
                              <p>
                                In<a href="">Design</a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="post-item">
                          <div className="post-img">
                            <img src="img/post-5.jpg" />
                          </div>
                          <div className="post-text">
                            <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            <div className="post-meta">
                              <p>
                                By<a href="">Admin</a>
                              </p>
                              <p>
                                In<a href="">Design</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="popular" className="container tab-pane fade">
                        <div className="post-item">
                          <div className="post-img">
                            <img src="img/post-1.jpg" />
                          </div>
                          <div className="post-text">
                            <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            <div className="post-meta">
                              <p>
                                By<a href="">Admin</a>
                              </p>
                              <p>
                                In<a href="">Design</a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="post-item">
                          <div className="post-img">
                            <img src="img/post-2.jpg" />
                          </div>
                          <div className="post-text">
                            <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            <div className="post-meta">
                              <p>
                                By<a href="">Admin</a>
                              </p>
                              <p>
                                In<a href="">Design</a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="post-item">
                          <div className="post-img">
                            <img src="img/post-3.jpg" />
                          </div>
                          <div className="post-text">
                            <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            <div className="post-meta">
                              <p>
                                By<a href="">Admin</a>
                              </p>
                              <p>
                                In<a href="">Design</a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="post-item">
                          <div className="post-img">
                            <img src="img/post-4.jpg" />
                          </div>
                          <div className="post-text">
                            <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            <div className="post-meta">
                              <p>
                                By<a href="">Admin</a>
                              </p>
                              <p>
                                In<a href="">Design</a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="post-item">
                          <div className="post-img">
                            <img src="img/post-5.jpg" />
                          </div>
                          <div className="post-text">
                            <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            <div className="post-meta">
                              <p>
                                By<a href="">Admin</a>
                              </p>
                              <p>
                                In<a href="">Design</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="latest" className="container tab-pane fade">
                        <div className="post-item">
                          <div className="post-img">
                            <img src="img/post-1.jpg" />
                          </div>
                          <div className="post-text">
                            <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            <div className="post-meta">
                              <p>
                                By<a href="">Admin</a>
                              </p>
                              <p>
                                In<a href="">Design</a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="post-item">
                          <div className="post-img">
                            <img src="img/post-2.jpg" />
                          </div>
                          <div className="post-text">
                            <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            <div className="post-meta">
                              <p>
                                By<a href="">Admin</a>
                              </p>
                              <p>
                                In<a href="">Design</a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="post-item">
                          <div className="post-img">
                            <img src="img/post-3.jpg" />
                          </div>
                          <div className="post-text">
                            <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            <div className="post-meta">
                              <p>
                                By<a href="">Admin</a>
                              </p>
                              <p>
                                In<a href="">Design</a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="post-item">
                          <div className="post-img">
                            <img src="img/post-4.jpg" />
                          </div>
                          <div className="post-text">
                            <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            <div className="post-meta">
                              <p>
                                By<a href="">Admin</a>
                              </p>
                              <p>
                                In<a href="">Design</a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="post-item">
                          <div className="post-img">
                            <img src="img/post-5.jpg" />
                          </div>
                          <div className="post-text">
                            <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            <div className="post-meta">
                              <p>
                                By<a href="">Admin</a>
                              </p>
                              <p>
                                In<a href="">Design</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sidebar-widget wow fadeInUp">
                  <div className="image-widget">
                    <a href="#">
                      <img src="img/blog-2.jpg" alt="Image" />
                    </a>
                  </div>
                </div>

                <div className="sidebar-widget wow fadeInUp">
                  <h2 className="widget-title">Categories</h2>
                  <div className="category-widget">
                    <ul>
                      <li>
                        <a href="">National</a>
                        <span>(98)</span>
                      </li>
                      <li>
                        <a href="">International</a>
                        <span>(87)</span>
                      </li>
                      <li>
                        <a href="">Economics</a>
                        <span>(76)</span>
                      </li>
                      <li>
                        <a href="">Politics</a>
                        <span>(65)</span>
                      </li>
                      <li>
                        <a href="">Lifestyle</a>
                        <span>(54)</span>
                      </li>
                      <li>
                        <a href="">Technology</a>
                        <span>(43)</span>
                      </li>
                      <li>
                        <a href="">Trades</a>
                        <span>(32)</span>
                      </li>
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
                    <a href="">National</a>
                    <a href="">International</a>
                    <a href="">Economics</a>
                    <a href="">Politics</a>
                    <a href="">Lifestyle</a>
                    <a href="">Technology</a>
                    <a href="">Trades</a>
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
