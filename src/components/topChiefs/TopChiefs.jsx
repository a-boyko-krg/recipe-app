import ChiefCard from '../topChiefs/chiefCard/ChiefCard';
import chiefs from '../../data/chiefsList.js'

function TopChiefs() {
   return (
    <section className="section chiefs">
      <h1 className="title">Наші найкращі кухарі </h1>
      <div className="top-chiefs-container">
        {chiefs.map((chief) => (
          <ChiefCard key={chief.name} chief={chief} />
        ))}
      </div>
    </section>
  );
}
export default TopChiefs;
