import "./styles/css/homepage.css";
import correct from "./assets/icons/correct.svg";
import wrong from "./assets/icons/wrong.svg";

const Pricing = () => {
  return (
    <section>
      <article>
        <h2 class="info--title">Our Pricing</h2>
        <div class="info--main">
          <p class="info--description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, earum
            consequatur architecto labore vero recusandae adipisci libero id
            nostrum perspiciatis maiores magni ipsa ratione ex non voluptates!
            Dolorem, perferendis unde.
          </p>
          <div class="pricing--btn-container">
            <button class="btn-medium bg-orange-50 white">Monthly</button>
            <button class="btn-medium">Yearly</button>
          </div>
        </div>
      </article>
      <div class="vouchers">
        <article class="voucher">
          <p class="voucher--type bg-orange-97">Free Plan</p>
          <div class="voucher--meta">
            <span class="voucher--price">$0</span>
            <span class="voucher--duration">/month</span>
          </div>
          <div class="voucher-features">
            <p class="voucher-features--title">Available Features</p>
            <figure class="voucher--feature">
              <i class="bg-orange-95 p-5">
                <img src={correct} alt="" />
              </i>
              <p>Access to selected free courses.</p>
            </figure>
            <figure class="voucher--feature">
              <i class="bg-orange-95 p-5">
                <img src={correct} alt="" />
              </i>
              <p>Access to selected free courses.</p>
            </figure>
            <figure class="voucher--feature">
              <i class="bg-orange-95 p-5">
                <img src={correct} alt="" />
              </i>
              <p>Access to selected free courses.</p>
            </figure>
            <figure class="voucher--feature">
              <i class="bg-orange-95 p-5">
                <img src={correct} alt="" />
              </i>
              <p>Access to selected free courses.</p>
            </figure>
            <figure class="voucher--feature">
              <i class="bg-orange-95 p-5">
                <img src={correct} alt="" />
              </i>
              <p>Access to selected free courses.</p>
            </figure>
            <figure class="voucher--feature">
              <i class="bg-orange-95 p-5">
                <img src={wrong} alt="" />
              </i>
              <p>Access to selected free courses.</p>
            </figure>
            <figure class="voucher--feature">
              <i class="bg-orange-95 p-5">
                <img src={wrong} alt="" />
              </i>
              <p>Access to selected free courses.</p>
            </figure>
            <button class="bg-orange-50 p-12 white rad-6">Get Started</button>
          </div>
        </article>
        <article class="voucher">
          <p class="voucher--type bg-orange-97">Paid Plan</p>
          <div class="voucher--meta">
            <span class="voucher--price">$100</span>
            <span class="voucher--duration">/month</span>
          </div>
          <div class="voucher-features">
            <p class="voucher-features--title">Available Features</p>
            <figure class="voucher--feature">
              <i class="bg-orange-95 p-5">
                <img src={correct} alt="" />
              </i>
              <p>Access to selected free courses.</p>
            </figure>
            <figure class="voucher--feature">
              <i class="bg-orange-95 p-5">
                <img src={correct} alt="" />
              </i>
              <p>Access to selected free courses.</p>
            </figure>
            <figure class="voucher--feature">
              <i class="bg-orange-95 p-5">
                <img src={correct} alt="" />
              </i>
              <p>Access to selected free courses.</p>
            </figure>
            <figure class="voucher--feature">
              <i class="bg-orange-95 p-5">
                <img src={correct} alt="" />
              </i>
              <p>Access to selected free courses.</p>
            </figure>
            <figure class="voucher--feature">
              <i class="bg-orange-95 p-5">
                <img src={correct} alt="" />
              </i>
              <p>Access to selected free courses.</p>
            </figure>
            <figure class="voucher--feature">
              <i class="bg-orange-95 p-5">
                <img src={correct} alt="" />
              </i>
              <p>Access to selected free courses.</p>
            </figure>
            <figure class="voucher--feature">
              <i class="bg-orange-95 p-5">
                <img src={correct} alt="" />
              </i>
              <p>Access to selected free courses.</p>
            </figure>
            <button class="bg-orange-50 p-12 white rad-6">Get Started</button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Pricing;
