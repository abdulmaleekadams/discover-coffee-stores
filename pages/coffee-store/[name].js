import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import coffeeStoresData from "../../data/coffee-store.json";
import styles from "../../styles/coffee-store.module.css";
import cls from "classnames";
export function getStaticProps({ params }) {
  return {
    props: {
      coffeeStore: coffeeStoresData.find((coffeeStore) => {
        return (
          coffeeStore.name.replace(/ /g, "-").toLowerCase() === params.name
        );
      }),
    },
  };
}
export function getStaticPaths() {
  const paths = coffeeStoresData.map((coffeeStore) => ({
    params: {
      name: coffeeStore.name.replace(/ /g, "-").toLowerCase(),
    },
  }));
  return {
    paths,
    fallback: true,
  };
}

const CoffeeStore = (props) => {
  const router = useRouter();
  console.log(router.query);
  if (router.isFallback) {
    return <div>Loadddinnnfffffffffffff</div>;
  }

  const { name, address, neighbourhood, imgUrl } = props.coffeeStore;
  const handleUpVoteButton = () => {
    alert("Thank You")
  }
  return (
    <div className={styles.layout}>
      <Head>
        <title>{name}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href="/">Back to home</Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{name}</h1>
          </div>
          <Image
            src={imgUrl}
            width={600}
            height={360}
            className={styles.storeImg}
            alt={name}
          />
        </div>
        <div className={cls("glass", styles.col2)}>
          <div className={styles.iconWrapper}>
            <Image src="" width={24} height={24} alt="Address" />
            <p className={styles.text}>{address}</p>
          </div>

          <div className={styles.iconWrapper}>
            <Image src="" width={24} height={24} alt="Neighbourhood" />
            <p className={styles.text}>{neighbourhood}</p>
          </div>

          <div className={styles.iconWrapper}>
            <Image src="" width={24} height={24} alt="rating" />
            <p className={styles.text}>{`rating`}</p>
          </div>

          <button className={styles.upVoteButton} onClick={handleUpVoteButton} value='Up Vote!' />
        </div>
      </div>
    </div>
  );
};

export default CoffeeStore;
