import etoileGrise from '../assets/icon/etoile-grise.png'
import etoileRose from '../assets/icon/etoile-rose.png'



const Rating = ({ rating }) => {
    const etoiles = [1, 2, 3, 4, 5];
    
      return (
        <div className="toile">
          {etoiles.map((etoile) =>
            rating >= etoile ? (
              <img
                key={etoile.toString()}
                className="etoileIcone"
                src={etoileRouge} alt="étoile rouge"
              />
            ) : (
              <img
                key={etoile.toString()}
                className="etoileIcones"
                src={etoileBlanche} alt="étoile blanche"
              />
            )
          )}
        </div>
      )
  }
  export default Rating;