import { useState } from 'react';
import blogs from '../../data/blogs';
import BlogGrid from '../../components/BlogGrid';

const Blog = () => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
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
          <BlogGrid blogs={currentBlogs} />

          {/* Pagination */}
          <div className="flex justify-center mt-6">
            <ul className="flex space-x-2">
              <li className={`cursor-pointer ${currentPage === 1 ? 'opacity-50 pointer-events-none' : ''}`}>
                <a
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  Previous
                </a>
              </li>

              {Array.from({ length: totalPages }, (_, i) => (
                <li key={i} className={`cursor-pointer ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'} rounded`}>
                  <a
                    className="px-4 py-2 transition"
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </a>
                </li>
              ))}

              <li className={`cursor-pointer ${currentPage === totalPages ? 'opacity-50 pointer-events-none' : ''}`}>
                <a
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Next
                </a>
              </li>
            </ul>
          </div>
          {/* Pagination end */}
        </div>
      </div>
    </>
  );
};

export default Blog;
