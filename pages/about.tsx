import Layout from "../layout";

export default function About() {
  return (
    <Layout>
      <div className="container">
        <h1>ABOUT</h1>
        <p>
          I have come to the realisation that pondering and directing our
          thoughts towards God is a truly invaluable activity. The important
          concepts of spirituality, sin and God’s never ending mercy often do
          not take center stage in our lives, seconded by the distractions and
          “priorities” of day to day tasks. By consciously directing our
          attention to Him, it helps us to be reminded of his existence and
          importance in our lives. In pondering and reflecting, it allows us to
          worship and to be in awe at the scope of His glory and power. I have
          always found that it takes time and conscious effort for me to recount
          and to admit my brokenness before God, to approach him with humility.
          However upon doing so, it allows me to be filled by his love and to be
          reminded of how Jesus has given me new birth.
        </p>
        <p>
          I hope that in writing this blog, it will provide opportunities for me
          to engage in thought about God and my faith. I also hope that as
          readers, as you read and reflect about “My 2c on Faith”, that it will
          similarly prompt and direct trains of thought about God and His
          awesomeness. Let me know what your thoughts are! You can contact me
          through this email: davidkwong17@gmail.com
        </p>
        <p>David,</p>
      </div>
      <style jsx>{`
        p {
          margin-bottom: 1.3rem;
        }
        h1 {
          margin-bottom: 3rem;
        }
        .container {
          margin: 10rem 0;
          padding: 0 2rem;
        }

        @media (min-width: 768px) {
          .container {
            padding: 0 4rem;
          }
        }
        @media (min-width: 992px) {
          .container {
            padding: 0 8rem;
            width: 992px;
          }
        }
      `}</style>
    </Layout>
  );
}
