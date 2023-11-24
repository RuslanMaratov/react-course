import React from "react";
import s from "./Paginator.module.css";

export default function Paginator({ pages, onPageChanged, currentPage }) {
  return (
    <div className={s.pagination}>
      {pages.map((p) => {
        return (
          <div
            key={p}
            onClick={() => onPageChanged(p)}
            className={currentPage === p ? s.selectedPage : s.paginationItem}
          >
            {p}
          </div>
        );
      })}
    </div>
  );
}
