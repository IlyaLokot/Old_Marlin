import './Shop.css'


function Cart({ img, name, category, price, description, button, add }) {
  
  return (
    <div className="cart" style={{ backgroundImage: `url(${img})` }} title={description}>
      <div className="tag">
        <h2>{name}</h2>
        <p style={{ fontStyle: "italic" }}>{category}</p>
        <p style={{ fontWeight: "bold", fontSize: "16px", color: "#ffd700", display: "flex" }}>
          {price} ₼

          {button !== "hidden" && (
            <button className="addbutton" onClick={add}>
              {button || "☩"}
            </button>
          )}
        </p>
      </div>
    </div>
  )
} 


export default Cart