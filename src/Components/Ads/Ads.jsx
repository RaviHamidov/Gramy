import styles from "../Ads/Ads.module.css";
function Ads(props) {

  return (
    <>
      <div className={styles.parent}>
        <div
          className={styles.child}
          style={{
            backgroundImage: `url(${props.image})`,
          }}
        ></div>
      </div>
    </>
  );
}
export default Ads;
