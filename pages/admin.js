import React, { useState } from "react";

// Sekme içerikleri için dummy bileşenler
import CreatePost from "@/Components/Admin/CreatePost";
const CreateCategory = () => <div>Create a new category here</div>;
const Posts = () => <div>List of all posts</div>;
const Categories = () => <div>List of all categories</div>;

const Admin = () => {
  const [activeTab, setActiveTab] = useState("Create Post"); // Varsayılan olarak "Create Post" sekmesi

  const renderContent = () => {
    switch (activeTab) {
      case "Create Post":
        return <CreatePost />;
      case "Create Category":
        return <CreateCategory />;
      case "Posts":
        return <Posts />;
      case "Categories":
        return <Categories />;
      default:
        return null;
    }
  };

  const tabClass =
    "cursor-pointer px-4 py-2 text-lg font-semibold transition-colors duration-300 text-neutral-700 dark:text-neutral-400";
  const activeTabClass =
    "border-b-4 border-orange-500 text-orange-500 dark:text-orange-400";

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center text-neutral-800 dark:text-neutral-100">Admin Panel</h1>

      {/* Tab Menüsü */}
      <div className="flex justify-center gap-4 border-b mb-8">
        <div
          className={`${tabClass} ${
            activeTab === "Create Post" ? activeTabClass : ""
          }`}
          onClick={() => setActiveTab("Create Post")}
        >
          Create Post
        </div>
        <div
          className={`${tabClass} ${
            activeTab === "Create Category" ? activeTabClass : ""
          }`}
          onClick={() => setActiveTab("Create Category")}
        >
          Create Category
        </div>
        <div
          className={`${tabClass} ${
            activeTab === "Posts" ? activeTabClass : ""
          }`}
          onClick={() => setActiveTab("Posts")}
        >
          Posts
        </div>
        <div
          className={`${tabClass} ${
            activeTab === "Categories" ? activeTabClass : ""
          }`}
          onClick={() => setActiveTab("Categories")}
        >
          Categories
        </div>
      </div>

      {/* Aktif Sekmenin İçeriği */}
      <div className="mt-4">{renderContent()}</div>
    </div>
  );
};

export default Admin;