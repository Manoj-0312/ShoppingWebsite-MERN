import React, { useState } from "react";
import styled from "styled-components";
import { CircularProgress, Rating } from "@mui/material";
import {
  FavoriteBorder,
  FavoriteRounded,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Card = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.3s ease-out;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 180px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 6px;
  object-fit: cover;
  transition: all 0.3s ease-out;
  @media (max-width: 600px) {
    height: 180px;
  }
`;
const Menu = styled.div`
  position: absolute;
  color: ${({ theme }) => theme.text_primary};
  top: 14px;
  right: 14px;
  display: none;
  flex-direction: column;
  gap: 12px;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 6px;
  transition: all 0.3s ease-out;
  &:hover ${Menu} {
    display: flex;
  }
`;
const MenuItem = styled.div`
  border-radius: 50%;
  width: 18px;
  height: 18px;
  background: white;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
`;
const Rate = styled.div`
  position: absolute;
  color: ${({ theme }) => theme.text_primary};
  bottom: 8px;
  left: 8px;
  padding: 4px 8px;
  border-radius: 4px;
  background: white;
  display: flex;
  align-items: center;
  opacity: 0.9;
`;
const Details = styled.div`
  display: flex;
  gap: 6px;
  flex-direction: column;
  padding: 4px 10px;
`;
const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
`;
const Desc = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  white-space: normal;
`;
const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;

const ProductsCard = ({ product }) => {
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState(false);
  const [favoriteLoading, setFavoriteLoading] = useState(false);

  return (
    <Card>
      <Top>
        <Image src={product?.img} />
        <Menu>
          <MenuItem onClick={() => setFavorite(!favorite)}>
            {favoriteLoading ? (
              <CircularProgress sx={{ fontSize: "20px" }} />
            ) : favorite ? (
              <FavoriteRounded sx={{ fontSize: "20px", color: "red" }} />
            ) : (
              <FavoriteBorder sx={{ fontSize: "20px" }} />
            )}
          </MenuItem>
          <MenuItem>
            <ShoppingBagOutlined sx={{ fontSize: "20px" }} />
          </MenuItem>
        </Menu>
        <Rate>
          <Rating value={4} sx={{ fontSize: "14px" }} />
        </Rate>
      </Top>
      <Details onClick={() => navigate(`/dishes/${product._id}`)}>
        <Title>{product?.name}</Title>
        <Desc>{product?.desc}</Desc>
        <Price>
          ${product?.price?.org} <span>${product?.price?.mrp}</span>
        </Price>
      </Details>
    </Card>
  );
};

export default ProductsCard;
