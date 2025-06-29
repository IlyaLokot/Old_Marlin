function NewPost({ news }) {
  return (
    <>
      {news.slice().reverse().map((p, index) => (
        <div key={index} style={{ display: "flex", flexDirection: "column" }}>

          <div style={{ display: 'flex', flexDirection: "row", justifyContent: "space-between" }}>
            <div style={{ width: '10%' }}></div>
            <h2 style={{ textAlign: "center", fontSize: '30px' }}>{p.rubric}</h2>
            <span style={{ fontSize: "10px", textAlign: "right", display: "flex", flexDirection: "column", flexWrap: "wrap", width: '10%', justifyContent:"center" }}>Опубликовано: {p.date}</span>
          </div>

          <div>{p.post}</div>

        </div>
      ))}
    </>
  )
}


function Home({ news }) {
  return (
    <div >
      <div>
        <img src="images/Old_Marlin_logo.png" alt="" style={{ height: "300px", float: "left", margin: "20px" }} />
        <h1 style={{ textAlign: 'center', }}>Добро пожаловать в рыцарский магазин!</h1>
      </div>
      <p>У нас есть всё: от ржавых мечей до магических зелий.</p>
      <h2 className="rubric">Новости</h2>

      <NewPost news={news} />
    </div>

  )
}

export default Home