import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Backendless from 'backendless';
import { FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';

interface BlogItem {
  objectId: string;
  title: string;
  description: string;
  imageSrc: string;
  created: number;
  // Change authorName (optional string) to author (optional object)
  author?: {
    name?: string; // Assuming you have a 'name' column in your Users table
    email?: string;
  };
}

const BlogCard: React.FC<{ item: BlogItem }> = ({ item }) => {
  // Format the date (e.g., "Jan 16, 2026")
  const formattedDate = new Date(item.created).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <Link
      to={`/blogs/${item.objectId}`}
      className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full transform hover:scale-105 transition duration-300 no-underline text-inherit"
    >
      <img
        src={item.imageSrc}
        alt={item.title}
        className="w-full h-52 object-cover"
      />
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-3">
          <h3 className="text-lg font-semibold text-center text-black">{item.title}</h3>
        </div>
        <p className="text-sm text-gray-600 mb-5 flex-grow text-center">
          {item.description}
        </p>

        {/* Footer section for Author and Date */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-auto">
          <span className="text-xs font-medium text-[#AB6B2E]">
            By {item.author?.name || item.author?.email || 'NA Roastery'}
          </span>
          <span className="text-xs text-gray-800">
            {formattedDate}
          </span>
        </div>
      </div>
    </Link>
  );
};

const Blogs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [blogPosts, setBlogPosts] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isNewestFirst, setIsNewestFirst] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const queryBuilder = Backendless.DataQueryBuilder.create()
          .setSortBy(["created DESC"])
          // Add this to fetch the related author object
          .setRelated(["author"]);

        const data = await Backendless.Data.of("Blogs").find<BlogItem>(queryBuilder);
        setBlogPosts(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const filteredPosts = useMemo(() => {
    // 1. First, filter the posts based on search
    const filtered = blogPosts.filter(post =>
      post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // 2. Then, sort the filtered results based on isNewestFirst
    return [...filtered].sort((a, b) => {
      if (isNewestFirst) {
        return b.created - a.created; // Newest (larger timestamp) first
      } else {
        return a.created - b.created; // Oldest (smaller timestamp) first
      }
    });
  }, [searchTerm, blogPosts, isNewestFirst]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFDCAB]">
        <h2 className="text-2xl font-semibold animate-pulse text-black">Brewing Stories...</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center pt-20 lg:px-32 px-5 bg-gradient-to-r from-[#FFDCAB] via-[#B8834E] to-[#AB6B2E] pb-20">

      {/* Moved the title up and centered it */}
      <h1 className="font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8 text-black">Our Coffee Stories</h1>

      {/* NEW Layout: Container for Search Bar, Sort Button, and New Story Button */}
      <div className="w-full max-w-3xl mb-10 flex gap-4 items-center">
        <input
          type="text"
          placeholder="Search for roasts, tips, or stories..."
          className="flex-grow p-4 rounded-full shadow-xl focus:outline-none focus:ring-2 focus:ring-[#AB6B2E] bg-white text-black"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Sort Toggle Button */}
        <button
          onClick={() => setIsNewestFirst(!isNewestFirst)}
          className="bg-white px-5 py-3 rounded-full shadow-xl hover:bg-gray-50 flex items-center gap-2 font-medium text-[#AB6B2E] transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
          title={isNewestFirst ? "Sorting: Newest First" : "Sorting: Oldest First"}
        >
          {isNewestFirst ? <FaSortAmountDown /> : <FaSortAmountUp />}
        </button>

        {/* New Story Button positioned on the right */}
        <Link to="/blogs/create" className="bg-background-color text-black px-5 py-3 rounded-full shadow-xl hover:bg-white transition duration-300 whitespace-nowrap">
          + Story
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch w-full">
        {filteredPosts.map((item) => (
          <BlogCard key={item.objectId} item={item} />
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center mt-20">
          <p className="text-black text-xl font-medium">No coffee stories found matching "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
};

export default Blogs;
