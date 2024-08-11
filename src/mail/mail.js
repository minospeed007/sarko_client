import "./mail.css"

const MailList = () => {
  return (
    <div className="mail">
      <h2 className="mailTitle">Explore latest trend, connect with your favorite creators</h2>
      <span className="mailDesc">Subscribe to get latest trending designs with Sarto 
        </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList