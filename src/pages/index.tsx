import styles from "../styles/Home.module.css";

export const Home = () => (
  <article className={styles.article}>
    <h2>What is the purpose of that application?</h2>
    <p>
      This application should primarily help refugees to find shelter in neighboring countries. The
      refugees and their security needs are the main drivers for this project. Ideally each language
      of neighboring countries can be offered, of course the main one needs to Ukrainian.
    </p>
    <p>
      Refugees should feel safe to enter their contact information without being in danger of being
      chased or pursued after fleeing in a foreign country.
    </p>
    <p>
      That means, no data is being revealed unless the person or group has granted a mutual data
      exchange, like assigning a private housing offering.
    </p>
    <p>
      The application needs to work perfectly in a mobile network with low bandwidth or in some
      later versions purely with text messages. Hence the UI needs to be as small as possible,
      little to no client-side code execution and as little remoting as possible.
    </p>

    <h2>Future goals</h2>
    <p>
      Showing a map, based on district level aggregation, where available housing is displayed could
      be a useful extension.
    </p>
    <p>
      Also finding family members or friends across (Eastern) Europe is one of the next milestones.
    </p>

    <h2>Application under development</h2>
    <p>
      This application is - sadly :( - not yet ready to be used, but under ACTIVE development! To
      get updates subscribe to the GitHub project
    </p>
  </article>
);
export default Home;
