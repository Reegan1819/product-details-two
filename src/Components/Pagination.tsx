import { useState } from "react";
import Pagination from "react-bootstrap/Pagination";

interface PaginationProps {
  setSkips: React.Dispatch<React.SetStateAction<number>>;
  total: number;
  limit: number;
  skip: number;
}

const ProductListPagination: React.FC<PaginationProps> = ({
  setSkips,
  total,
  limit,
  skip,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLast, setIsLast] = useState(false);
  const [isFirst, setIsFirst] = useState(true);
  const [isNext, setIsNext] = useState(false);
  const [isPrev, setIsPrev] = useState(true);

  const totalProducts = Math.ceil(total / limit);

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
    setSkips((prev) => prev + limit);
    setIsLast(false);
    setIsFirst(false);
    setIsPrev(false);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => prev - 1);
    setSkips((prev) => prev - limit);
    setIsLast(false);
    console.log(currentPage);

    if (currentPage === 2) {
      setIsFirst(true);
      setIsPrev(true);
    }
  };

  const handleLast = () => {
    setCurrentPage(totalProducts);
    setSkips(total - limit);
    setIsLast(true);
    setIsFirst(false);
    setIsNext(true);
  };

  const handleFirst = () => {
    setCurrentPage(1);
    setSkips(0);
    setIsLast(false);
    setIsFirst(true);
    setIsNext(false);
  };

  return (
    <Pagination className="justify-content-center mt-4">
      <Pagination.First onClick={handleFirst} disabled={isFirst} />
      <Pagination.Prev onClick={handlePrev} disabled={isPrev} />
      <Pagination.Item>{currentPage}</Pagination.Item>

      <Pagination.Next onClick={handleNext} disabled={isNext} />
      <Pagination.Last onClick={handleLast} disabled={isLast} />
    </Pagination>
  );
};

export default ProductListPagination;
