import React from "react";

function Pagination(props) {
  const pageNumber = [];
  for (
    let i = 1;
    i <= Math.ceil(props.totalProduct / props.ProductPerPage);
    i++
  ) {
    pageNumber.push(i);
  }
  console.log("pagi....", props.ProductPerPage, props.totalProduct);
  return (
    <div>
      <ul className="pagination">
        {pageNumber.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => props.paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
