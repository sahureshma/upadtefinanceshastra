import React, { useState } from "react";
import "./Blogsfilter.css";
import all1 from "../../../assest/all1.jpeg";
import all2 from "../../../assest/all2.jpeg";
import all3 from "../../../assest/all3.jpeg";
import all4 from "../../../assest/all4.jpeg";
import all5 from "../../../assest/all5.jpeg";
import all6 from "../../../assest/all6.jpeg";
import all7 from "../../../assest/all7.jpeg";
import all8 from "../../../assest/all8.jpeg";
import all9 from "../../../assest/all9.jpeg";
import all10 from "../../../assest/all10.jpeg";
import all11 from "../../../assest/all11.jpeg";
import all12 from "../../../assest/img3.JPG";
import Navbar from "../../../Navbar/Navbar";

// Dynamic Categories & Authors
const categories = [
  "All", "Trending", "Stock Market", "IPOs", "Mutual Funds",
  "Commodity", "Automated Trading", "Equity", "Gold", "PMS", "Demat Account",
];
const authors = ["All", "Chandresh Tripathi", "Nagnath Shinde", "Saurav Rathod"];
const sortOptions = ["Latest", "Old"];

// Blog Data
const blogs = [
  { id: 1, image: all1, title: "Build a prosperous portfolio for 2024 with these top 5 stock picks", category: "PMS", author: "Chandresh Tripathi", trending: true },
  { id: 2, image: all2, title: "Unlisted Shares Taxation in India", category: "Demat Account", author: "Chandresh Tripathi", trending: false },
  { id: 3, image: all3, title: "Budget 2024: Key Changes in Income Tax and Capital Gain", category: "Mutual Funds", author: "Chandresh Tripathi", trending: true },
  { id: 4, image: all4, title: "Exploring the Top 10 Penny Stocks in India for 2024", category: "Stock Market", author: "Nagnath Shinde", trending: true },
  { id: 5, image: all5, title: "5 Factors to Look at While Investing in an IPO", category: "IPOs", author: "Saurav Rathod", trending: false },
  { id: 6, image: all6, title: "Which Indian Companies will be Affected by the Rising Crude Oil Prices?", category: "Trending", author: "Saurav Rathod", trending: true },
  { id: 7, image: all7, title: "A Comparison Between Sovereign Gold Bond and Physical Gold", category: "Gold", author: "Saurav Rathod", trending: true },
  { id: 8, image: all8, title: "Top 5 Waste Management and Recycling Stocks to invest in 2024", category: "Equity", author: "Nagnath Shinde", trending: true },
  { id: 9, image: all9, title: "Can I Withdraw Mutual Fund Anytime", category: "Mutual Funds",  author:"Nagnath Shinde", trending: true  },
  { id: 10, image: all10, title: "Online Nomination For Your Demat account - A detailed guide", category: "Demat Account", author: "Saurav Rathod", trending: false },
  { id: 11, image: all11, title: "Nifty 50 Vs Nifty Next 50 Vs Nifty 100-Pick Your Large Cap Index", category: "Equity", author: "Nagnath Shinde", trending: true },
  { id: 12, image: all12, title: "Fundamentals of Gold Trading", category: "Commodity", author: "Chandresh Tripathi", trending: false },
];

// Reusable Dropdown Component with Hover Effect
const CustomDropdown = ({ label, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  return (
    <div className="customDropdown">
      <label className="dropdownLabel">{label}:</label>
      <div className="dropdownSelect" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption}
        <span className="dropdownArrow">&#9662;</span>
      </div>
      {isOpen && (
        <div className="dropdownOptions">
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdownOption"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

function BlogFilter() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedAuthor, setSelectedAuthor] = useState("All");
  const [selectedSort, setSelectedSort] = useState("Latest");
  const [activeTab, setActiveTab] = useState("All");

  // Filter Blogs
  const filteredBlogs = blogs.filter((blog) => {
    const isCategoryMatch = selectedCategory === "All" || blog.category === selectedCategory;
    const isAuthorMatch = selectedAuthor === "All" || blog.author === selectedAuthor;
    const isTrendingMatch = activeTab === "Trending Blogs" ? blog.trending : true;
    return isCategoryMatch && isAuthorMatch && isTrendingMatch;
  });

  // Sort Blogs
  const sortedBlogs = [...filteredBlogs].sort((a, b) => {
    if (selectedSort === "Latest") {
      return b.id - a.id; // Sort descending for Latest
    } else {
      return a.id - b.id; // Sort ascending for Old
    }
  });

  return (
    <div className="blogFilterContainer">
      <h3 className="blogFilterTitle">Blogs / All</h3>

      {/* Filters */}
      <div className="filterDropdowns">
      <CustomDropdown
          label="Sort By"
          options={sortOptions}
          value={selectedSort}
          onChange={(e) => setSelectedSort(e)}
        />
        <CustomDropdown
          label="Category"
          options={categories}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e)}
        />
        <CustomDropdown
          label="Author"
          options={authors}
          value={selectedAuthor}
          onChange={(e) => setSelectedAuthor(e)}
        />
       
      </div>

      {/* Blog List */}
      <div className="blogListall">
  {sortedBlogs.length > 0 ? (
    sortedBlogs.map(({ id, image, title, category }) => (
      <div key={id} className="blogCardall">
        <div className="blogContentssall">
          <div className="blogCategoryall">{category}</div>
          <h3 className="blogTitleall">{title}</h3>
        </div>
        <div className="blogImageContainerall">
          <img src={image} alt={title} className="blogImageall" />
          <a
  href="#"
  className={`readArticleLinkall ${id === 2 || id === 5 ? 'highlightReadArticle' : ''}`}
>

            Read Article &gt;
          </a>
        </div>
      </div>
    ))
  ) : (
    <p className="noBlogsMessageall">No blogs found matching the filters.</p>
  )}
</div>
      <Navbar />
    </div>
  );
}

export default BlogFilter;
