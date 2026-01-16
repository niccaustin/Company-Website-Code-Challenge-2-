import React, { useState } from 'react';
import Backendless from 'backendless';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const CreateBlogPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState(''); // Will be used as content for single page
  const [imageSrc, setImageSrc] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth(); // Get the currently logged-in user data

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user || !user.objectId) {
      alert("User session not found. Please log in again.");
      return;
    }

    setIsLoading(true);

    try {
      const newBlog = {
        title: title.length > 250 ? title.substring(0, 247) + "..." : title,
        description: description.substring(0, 200) + "...",
        content: description,
        imageSrc,
        author: {
          ___class: 'Users',
          objectId: user.objectId
        }
      };

      await Backendless.Data.of("Blogs").save(newBlog);

      alert("Blog post created successfully!");
      navigate('/blogs'); // Redirect to the blog list page
    } catch (error: any) {
      alert(`Failed to create blog: ${error.message}`);
      setIsLoading(false);
    }
  };

  const inputStyle = "w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#AB6B2E] text-gray-800 placeholder-gray-500 shadow-sm";
  const buttonStyle = "w-full bg-[#AB6B2E] text-white font-bold p-4 rounded-lg shadow-xl hover:bg-[#B8834E] transition duration-300 disabled:opacity-50";

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-r from-[#FFDCAB] via-[#B8834E] to-[#AB6B2E] p-4 flex justify-center">
      <form onSubmit={handleCreate} className="bg-white p-8 md:p-10 rounded-xl shadow-2xl w-full max-w-3xl h-fit">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Create a New Coffee Story</h1>

        <div className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Post Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className={inputStyle}
            maxLength={250}
            required
          />
          <input
            type="url"
            placeholder="Cover Image URL (e.g., https://...)"
            value={imageSrc}
            onChange={e => setImageSrc(e.target.value)}
            className={inputStyle}
            required
          />
          <textarea
            placeholder="Write your coffee story here..."
            value={description}
            onChange={e => setDescription(e.target.value)}
            rows={10}
            className={`${inputStyle} resize-none`}
            required
          />
        </div>

        <button type="submit" disabled={isLoading} className={`${buttonStyle} mt-8`}>
          {isLoading ? 'Publishing...' : 'Publish Story'}
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPage;