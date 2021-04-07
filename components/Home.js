import React from "react";

const Home = () => {
  return (
    <section className="home d-flex align-items-center">
      <div className="effect-wrap">
        <i className="fas fa-plus effect effect-1" aria-hidden="true" />
        <i className="fas fa-plus effect effect-2" aria-hidden="true" />
        <i className="fas fa-circle-notch effect effect-3" aria-hidden="true" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-7">
            <div className="home-text">
              <h1 className="text-center">株式会社 園 部 製 作 所</h1>
              <p className="text-center">
                弊社では、新型コロナウイルスの感染拡大防止の観点から
                お客様、従業員、関係先等の皆様の安全・安心を第一に考え
                県指導に基づいた対応を実施、継続しております。
              </p>
              <div className="home-btn d-flex justify-content-center">
                <button
                  itemType="button"
                  className="btn video-play-btn btn-normal"
                >
                  <i className="fa fa-play" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 text-center">
            <div className="home-img">
              <div className="circle"></div>
              <img src="/images/home/fuso-truck.jpg" alt="fuso-truck" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
