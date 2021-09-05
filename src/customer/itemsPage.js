import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import GenreType from "../common/genreEnum";

const ItemPages = (props) => {
  const [items, setItems] = useState({});
  const [currentPage, setPage] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    axios
      .get(`http://localhost:8080/itempage/${props.genre}`)
      .then((response) => {
        setItems(response.data);
      });
  }, []);

  const getDisplayItems = () => {
    const pagesVisited = currentPage * itemsPerPage;

    if (Object.keys(items).length !== 0) {
      return items
        .slice(pagesVisited, pagesVisited + itemsPerPage)
        .map((item) => {
          return (
            <li key={`${item.id}`}>
              <Link
                to={`/items/${props.genre}/${item.id}/`}
                style={{ textDecoration: "none" }}
              >
                <ul key={`${item.id}`} className="each-item">
                  <img
                    className="inst-pic"
                    src={`http://localhost:8080/${
                      GenreType[`${props.genre}`]
                    }/${item.imageName}/${item.id}/image/download`}
                    alt={""}
                  />
                  <li key={`${item.brandName}`} className="brand-name">
                    {item.brandName}
                  </li>
                  <li key={`${item.itemName}`} className="item-name">
                    <p>{item.itemName}</p>
                  </li>
                  <li key={`${item.price}`} className="price">
                    ￥{item.price}
                  </li>
                </ul>
              </Link>
            </li>
          );
        });
    }
  };

  const getItemsPerPage = () => {
    let itemsPerPage = [];
    let displayItems = {};
    displayItems = getDisplayItems();

    if (displayItems !== undefined) {
      while (displayItems.length > 0) {
        let fourItems = displayItems.splice(0, 4);
        itemsPerPage.push(
          <ul key={displayItems.length} className="item-page-list">
            {fourItems}
          </ul>
        );
      }
    }
    return itemsPerPage;
  };

  const pageCount = Math.ceil(items.length / itemsPerPage);

  const changePage = ({ selected }) => {
    setPage({ currentPage: selected });
  };

  return (
    <div className="body">
      <div className="container">
        <div className="item-page-lists">{getItemsPerPage()}</div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"pre"}
          nextLinkClassName={"next"}
          disabledClassName={"page"}
          activeClassName={"pagenationActive"}
        />
      </div>
    </div>
  );
};

export default ItemPages;
