import { useNavigate } from "react-router-dom"

import { StoreProductType } from "../../types"

interface StoreProductItemProps {
  data: StoreProductType
}

const StoreProductItem = ({ data }: StoreProductItemProps) => {
  const { id, productImages, productName, originalPrice, discountedPrice } = data
  const navigate = useNavigate()

  return (
    <li onClick={() => navigate(`/store/${id}`)}>
      <img
        src={productImages[0]}
        alt="product-img"
        className="aspect-square rounded-sm object-cover"
      />
      <div className="mt-[5px] ml-[5px]">
        <p className="text-md font-bold truncate">{productName}</p>
        <p className="mt-[5px] inline-block text-sm font-bold">
          {discountedPrice.toLocaleString()}원
        </p>
        <span className="pl-[5px] text-sm text-accent ">
          {Math.round(((originalPrice - discountedPrice) / originalPrice) * 100)}%
        </span>
      </div>
    </li>
  )
}

export default StoreProductItem
