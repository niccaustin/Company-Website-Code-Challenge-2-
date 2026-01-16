import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Backendless from 'backendless';

const SingleBlogPage = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSingleBlog = async () => {
      try {
        setLoading(true);
        const queryBuilder = Backendless.DataQueryBuilder.create()
          .setRelated(["author"]);

        const result = await Backendless.Data.of("Blogs").findById(id!, queryBuilder);
        setBlog(result);
      } catch (err) {
        console.error("Record not found or relation error", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchSingleBlog();
  }, [id]);

  if (loading) return <div className="pt-40 text-center text-xl font-semibold">Loading content...</div>;
  if (!blog) return <div className="pt-40 text-center text-xl">Blog post not found.</div>;

  // Format the date (e.g., January 16, 2026)
  const formattedDate = new Date(blog.created).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FFDCAB] via-[#B8834E] to-[#AB6B2E] pt-24 pb-20 px-5 lg:px-64">
      <Link to="/blogs" className="text-black font-semibold mb-10 inline-block hover:underline">
        ← Back to all stories
      </Link>

      <img
        src={blog.imageSrc}
        alt={blog.title}
        className="w-full h-[400px] lg:h-[500px] object-cover rounded-t-2xl shadow-xl"
      />

      <div className="bg-white p-8 lg:p-16 rounded-b-2xl shadow-2xl">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-gray-900">
          {blog.title}
        </h1>

        {/* Author and Date Section */}
        <div className="flex justify-between items-center mb-10 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-sm">Written by</span>
            <span className="font-bold text-[#AB6B2E] text-base lg:text-lg">
              {blog.author?.name || blog.author?.email || 'NA Roastery'}
            </span>
          </div>
          <div className="text-gray-800 text-sm italic">
            {formattedDate}
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
          <p className="whitespace-pre-line text-lg lg:text-xl">
            {blog.content || blog.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
