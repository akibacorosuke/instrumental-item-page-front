import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import GenreType from "../common/genreEnum";

const ItemDetail = (props) => {
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState({});
  const [mainPic, setPic] = useState();

  useEffect(() => {
    axios.get(`http://localhost:8080/${id}`).then((response) => {
      setItemDetail(response.data);
    });
  }, []);

  useEffect(() => {
    setItemDetail(itemDetail);
    setPic(
      `http://localhost:8080/${GenreType[`${props.genre}`]}/${
        itemDetail.imageName
      }/${id}/image/download`
    );
  }, [itemDetail, setPic]);

  const getSubImgs = () => {
    const result = itemDetail.subImageNames?.map((subImageName) => {
      let imageUrl = `http://localhost:8080/${subImageName}/${id}/image/download`;
      return (
        <li key={subImageName}>
          <img
            className="item-detail-ano-pic"
            src={imageUrl}
            alt={""}
            onMouseOver={() => changeImage(imageUrl)}
          />
        </li>
      );
    });
    if (result) {
      return result;
    } else {
      return null;
    }
  };

  const getUsedFlg = () => {
    return itemDetail.usedFlg === 1 ? (
      <div className="badge bg-success">USED</div>
    ) : null;
  };

  const getState = () => {
    return itemDetail.stateCode === 1 ? (
      <div className="state badge bg-danger">SOLD OUT</div>
    ) : null;
  };

  const changeImage = (picName) => {
    console.log(picName);
    setPic(picName);
  };

  return (
    <div className="item-detail-body">
      <main className="item-detail-main">
        <div class="item-detail-image">
          <img src={mainPic} className="item-detail-main-pic" alt={""} />

          <ul class="item-detail-ano-pic-body">
            <li key={id}>
              <img
                className="item-detail-ano-pic"
                src={`http://localhost:8080/${itemDetail.imageName}/${id}/image/download`}
                alt={""}
                onMouseOver={() =>
                  changeImage(
                    `http://localhost:8080/${itemDetail.imageName}/${id}/image/download`
                  )
                }
              />
            </li>
            {getSubImgs()}
          </ul>
        </div>
        <div className="info">
          <div className="brand-name">{itemDetail.brandName}</div>
          <div className="item-name">{itemDetail.itemName}</div>

          <p className="price">￥{itemDetail.price}</p>
          {getUsedFlg()}
          {getState()}
        </div>
      </main>
      <div className="item-desc">{itemDetail.itemMemo}</div>
    </div>
  );
};

export default ItemDetail;
