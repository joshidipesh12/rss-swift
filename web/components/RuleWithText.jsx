import styles from "../styles/hr.module.css";

const RuleWithText = props => {
  return (
    <div className={styles.hr_content} {...props}>
      {props.children}
    </div>
  );
};

export default RuleWithText;
