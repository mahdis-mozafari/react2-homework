function BildingCard({data}){
 <div className="card m-5">
  <img className="card-img-top" src={data.img} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{data.cardTitle}</h5>
      <p className="card-text">
      {data.cardDescription}
      </p>
    <a href="#" class="btn btn-primary">{data.button.url}</a>
  </div>
</div>
}
export default BildingCard