import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

export default function Quote() {
  return (
    <section className="section quote">
      <p className="quote-text">
        <FontAwesomeIcon icon={faQuoteLeft} /> Їжа - це все, чим ми є. Це
        продовження національних почуттів, етнічних почуттів, вашої особистої
        історії, вашої провінції, вашого регіону, вашого племені, вашої бабусі.
        Вона невіддільна від них від самого початку.
      </p>
      <p className="qoute-author">- Ентоні Бурден</p>
    </section>
  );
}
