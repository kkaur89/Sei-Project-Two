import React from 'react'

const Home = () => {
  return (
    <>
      <section className="hero is-medium is-link">
        <div className="hero-body">
          <p className="title">
Medium hero
          </p>
          <p className="subtitle">
Medium subtitle
          </p>
        </div>
      </section>


      <section className="section">
        <div className="container">
          <form className="is-inline">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="text" placeholder="Serch by cocktail..." />
              </div>
              <div className="control">
                <a className="button is-info">
                  Search
                </a>
              </div>
            </div>
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="text" placeholder="Serch by ingredient..." />
              </div>
              <div className="control">
                <a className="button is-info">
                  Search
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>


      <section className="section is-medium">
        <h1 className="title">Medium section</h1>
        <h2 className="subtitle">A simple container to divide you</h2>
      </section>


      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Tipple your Fancy</strong>
          </p>
        </div>
      </footer>
    </>
  )
}

export default Home






// <div className="columns">
// <div className="column">
//   <div className="columns is-mobile">
//     <div className="column">
//       <form className="box column is-half is-offset-one-quarter">
//         <div className="column">
//           <div className="field">
//             <input className="input bd-notification is-info" type="text" placeholder="Search by cocktail" />
//           </div>
//         </div>
//         <div className="column">
//           <div className="field">
//             <button type="submit" className="button is-fullwidth is-warning bd-notification is-info">Search!</button>
//           </div>
//         </div>            
//       </form>
//       <div className="column">
//         <p className="bd-notification is-info">Second nested column</p>
//       </div>
//     </div>
//   </div>
// </div>
// </div>