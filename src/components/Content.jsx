import Portfolio from '../assets/portfolio';
import './css/Content.css';
import { useState } from 'react';
import ProjectList from './projectList/ProjecList';

function Content() {
  const [paginationIndex, setPaginationIndex] = useState(9);
  const [portfolioItems, setPortfolioItems] = useState(Portfolio.slice(0, paginationIndex));
  const [curentPortfolio, setCurentPortfolio] = useState(Portfolio.slice(0, paginationIndex));
  const [activeCategory, setActiveCategory] = useState('Show All');
  const category = ['Show All', 'Design', 'Branding', 'Illustration', 'Motion'];

  const changeCategory = (category) => {
    setActiveCategory(category);
    if (category === 'Show All') {
      setCurentPortfolio(portfolioItems);
    } else {
      setCurentPortfolio(portfolioItems.filter((item) => item.category === category));
    }
  };

  const handlePagination = () => {
    if (paginationIndex > Portfolio.length) {
      return;
    } else {
      setPaginationIndex(paginationIndex + 9);
      setPortfolioItems(Portfolio.slice(0, paginationIndex));
      setCurentPortfolio(Portfolio.slice(0, paginationIndex));
      changeCategory(activeCategory);
    }
  };
  return (
    <div className="content">
      <div className="categorys">
        {category.map((category, i) => {
          return (
            <button
              key={i}
              onClick={() => changeCategory(category)}
              className={category === activeCategory ? 'category__item__active' : 'category__item'}>
              {category}
            </button>
          );
        })}
      </div>
      <ProjectList data={curentPortfolio} />;
      <button
        className="Load-button"
        onClick={() => {
          handlePagination();
        }}>
        Load More
      </button>
    </div>
  );
}

export default Content;
