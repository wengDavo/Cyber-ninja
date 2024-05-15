// import "./styles/css/homepage.css";
import correct from "./assets/icons/correct.svg";
import wrong from "./assets/icons/wrong.svg";

const Pricing = () => {
  return (
    <section>
      <article>
        <h2 className="info--title">Our Pricing</h2>
        <div className="info--main">
          <p className="info--description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, earum
            consequatur architecto labore vero recusandae adipisci libero id
            nostrum perspiciatis maiores magni ipsa ratione ex non voluptates!
            Dolorem, perferendis unde.
          </p>
          <div className="pricing--btn-container">
            <button className="btn-medium bg-orange-50 white">Monthly</button>
            <button className="btn-medium">Yearly</button>
          </div>
        </div>
      </article>
      <div className="vouchers">
        <article className="voucher">
          <p className="voucher--type bg-orange-97">Free Plan</p>
          <div className="voucher--meta">
            <span className="voucher--price">$0</span>
            <span className="voucher--duration">/month</span>
          </div>
          <div className="voucher-features">
            <p className="voucher-features--title">Available Features</p>
            <figure className="voucher--feature">
              <i className="bg-orange-95 p-5">
                <img src={correct} alt="" />
              </i>
              <p>Access to selected free courses.</p>
            </figure>
            <figure className="voucher--feature">
              <i className="bg-orange-95 p-5">
                <img src={correct} alt="" />
              </i>
              <p>Access to selected free courses.</p>
            </figure>
            <figure className="voucher--feature">
              <i className="bg-orange-95 p-5">
                <img src={correct} alt="" />
              </i>
              <p>Access to selected free courses.</p>
            </figure>
            <figure className="voucher--feature">
              <i className="bg-orange-95 p-5">
                <img src={correct} alt="" />
              </i>
              <p>Access to selected free courses.</p>
            </figure>
            <figure className="voucher--feature">
              <i className="bg-orange-95 p-5">
                <img src={correct} alt="" />
              </i>
              <p>Access to selected free courses.</p>
            </figure>
            <figure className="voucher--feature">
              <i className="bg-orange-95 p-5">
                <img src={wrong} alt="" />
              </i>
              <p>Access to selected free courses.</p>
            </figure>
            <figure className="voucher--feature">
              <i className="bg-orange-95 p-5">
                <img src={wrong} alt="" />
              </i>
              <p>Access to selected free courses.</p>
            </figure>
            <button className="bg-orange-50 p-12 white rad-6">
              Get Started
            </button>
          </div>
        </article>
        <article className="voucher">
          <p className="voucher--type bg-orange-97">Paid Plan</p>
          <div className="voucher--meta">
            <span className="voucher--price">$100</span>
            <span className="voucher--duration">/month</span>
          </div>
          <div className="voucher-features">
            <p className="voucher-features--title">Available Features</p>
            <figure className="voucher--feature">
              <i className="bg-orange-95 p-5">
                <img src={correct} alt="" />
              </i>
              <p>Access to selected free courses.</p>
            </figure>
            <figure className="voucher--feature">
              <i className="bg-orange-95 p-5">
                <img src={correct} alt="" />
              </i>
              <p>Access to selected free courses.</p>
            </figure>
            <figure className="voucher--feature">
              <i className="bg-orange-95 p-5">
                <img src={correct} alt="" />
              </i>
              <p>Access to selected free courses.</p>
            </figure>
            <figure className="voucher--feature">
              <i className="bg-orange-95 p-5">
                <img src={correct} alt="" />
              </i>
              <p>Access to selected free courses.</p>
            </figure>
            <figure className="voucher--feature">
              <i className="bg-orange-95 p-5">
                <img src={correct} alt="" />
              </i>
              <p>Access to selected free courses.</p>
            </figure>
            <figure className="voucher--feature">
              <i className="bg-orange-95 p-5">
                <img src={correct} alt="" />
              </i>
              <p>Access to selected free courses.</p>
            </figure>
            <figure className="voucher--feature">
              <i className="bg-orange-95 p-5">
                <img src={correct} alt="" />
              </i>
              <p>Access to selected free courses.</p>
            </figure>
            <button className="bg-orange-50 p-12 white rad-6">
              Get Started
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Pricing;
