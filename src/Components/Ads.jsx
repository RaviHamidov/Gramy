import styles from "../Components/Ads.module.css";
function Ads(props) {
  console.log(props.image);
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
