import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="NotFound">
      <div className="container NotFound__inner">
        <div className="NotFound__badge">404</div>
        <h1 className="NotFound__title">페이지를 찾을 수 없습니다</h1>
        <p className="NotFound__text">
          잘못된 경로로 접속하셨습니다. 메인으로 이동하거나 이전 페이지로
          돌아가세요.
        </p>
        <div className="NotFound__actions">
          <Link to="/" className="btn btn-point btn-pill">
            메인으로 이동
          </Link>
          <button
            type="button"
            className="btn btn-border btn-pill"
            onClick={() => navigate(-1)}
          >
            이전 페이지
          </button>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
