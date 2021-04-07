import React from "react";

const Product = () => {
  return (
    <section className="product section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title">
              <h2>
                製品<span>紹介</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="product-list">
            <div className="product-item">
              <img src="/images/product/01.jpg" alt="pipe" />
              <h3>パイプ</h3>
              <span>１億万円</span>
            </div>
            <div className="product-item">
              <img src="/images/product/02.jpg" alt="pipe" />
              <h3>パイプ</h3>
              <span>１億万円</span>
            </div>
            <div className="product-item">
              <img src="/images/product/03.jpg" alt="pipe" />
              <h3>パイプ</h3>
              <span>１億万円</span>
            </div>
            <div className="product-item">
              <img src="/images/product/04.jpg" alt="pipe" />
              <h3>パイプ</h3>
              <span>１億万円</span>
            </div>
            <div className="product-item">
              <img src="/images/product/05.jpg" alt="pipe" />
              <h3>パイプ</h3>
              <span>１億万円</span>
            </div>
            <div className="product-item">
              <img src="/images/product/06.jpg" alt="pipe" />
              <h3>パイプ</h3>
              <span>１億万円</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
