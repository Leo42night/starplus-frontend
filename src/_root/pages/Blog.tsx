import React, { useState } from 'react';
import blogs from '../../data/blogs'; // Sesuaikan path jika berbeda
import posts from '../../data/single-post';
import { useSearchParams } from "react-router-dom";

const Blog = () => {
  const itemsPerPage = 6;
  // get query
  const [searchParams] = useSearchParams();
  const tagParam = searchParams.get("tag");
  const [currentPage, setCurrentPage] = useState(1);
  const filteredBlogs = tagParam
  ? blogs.filter((blog) => blog.category.toLowerCase() === tagParam.toLowerCase())
  : blogs;
  const totalPages = Math.ceil(blogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBlogs = blogs.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12"><h2>Our Blog</h2></div>
            <div className="col-12">
              <a href="/">Home</a>
              <a href="#">Our Blog</a>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="blog">
        <div className="container">
          <div className="section-header text-center">
            <p>Latest Blog</p>
            <h2>Latest From Our Blog</h2>
          </div>
          <div className="row blog-page">
            {currentBlogs.map((blog, idx) => (
              <div key={idx} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
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

          {/* Pagination */}
          <div className="row">
            <div className="col-12">
              <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? 'disabled d-none' : 'd-block'}`}>
                  <a className="page-link" href="#" onClick={() => handlePageChange(currentPage - 1)}>Previous</a>
                </li>
                {Array.from({ length: totalPages }, (_, i) => (
                  <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                    <a className="page-link" href="#" onClick={() => handlePageChange(i + 1)}>{i + 1}</a>
                  </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled d-none' : 'd-block'}`}>
                  <a className="page-link" href="#" onClick={() => handlePageChange(currentPage + 1)}>Next</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
