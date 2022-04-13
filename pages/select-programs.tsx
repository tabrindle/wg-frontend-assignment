import type { NextPage } from "next";
import styles from "../styles/SelectPrograms.module.css";

// TODO: Fetch data from /api/programs, map data fields to markup
// TODO: Style component to match mockup, then add some design flare
// TODO: Track programs that are selected and update terms of service list and button text
// TODO: Auto select/deselect other programs based on exclusion field on checkbox change
// TODO: Submit selected program IDs to /api/programs

const SelectPrograms: NextPage = (props) => {
  return (
    <div className={styles.sp__container}>
      <h1 className={styles.sp__header}>Select Programs</h1>
      <form role="form">
        <div className={styles.sp__card}>
          <label htmlFor={"program-program.id"}>
            <h2 className={styles.sp__card_header}>program.name</h2>
            <p className={styles.sp__card_aside}>program.exclusionText</p>
            <input 
              checked={true} // program.preselected
              name="program-program.id"
              type="checkbox"
              onChange={() => {}}
              value="program.id"
            />
            <p className={styles.sp__card_description}>program.description</p>
            <ul>
              <li><a href="program.links.link">program.links.text</a></li>
            </ul>
            <h3 className={styles.sp__card_perks_header}>Perks</h3>
            <ul>
              <li>
                <a className={styles.sp__card_perks_content} href="program.perks.link">program.perks.text</a>
              </li>
            </ul>
            <div className={styles.sp__card_footer}>
              <p className={styles.sp__card_footer_text}>program.footer</p>
            </div>
              <p className={styles.sp__card_terms_text}>program.termsText</p>
          </label>
        </div>
        <p className={styles.sp_terms}>By selecting, you are agreeing to the following terms of service: </p>
        <button type="submit" className={styles.sp_button} disabled={false}>Enroll and Complete</button>
      </form>
    </div>
  );
};

export default SelectPrograms;
