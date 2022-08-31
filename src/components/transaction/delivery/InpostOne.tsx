export const InpostOne = () => {
  return (
    <div className="deliver-one">
      <div className="deliver-short-info">
        <div className="deliver-title">
          <label>kółko</label>
          <p>Paczkomat InPost</p>
          <span>address</span>
        </div>
        <div className="deliver-localisation-description">
          <div className="deliver-localisation-distance">
            {} m form the address - map
          </div>
        </div>
      </div>

      <div className="delivery-price">
        <div>{`$${(0).toFixed(2)}`}</div>
      </div>
    </div>
  );
};
