import styles from "./banner.module.css";
import classnames from "classnames";

const EmojiIcon = ({ children }) => (
  <span className={styles.emojiIcon}>{children}</span>
);

export const Banner = () => (
  <section className={styles.banner}>
    <div className={classnames("container", styles.bannerContainer)}>
      <h1 className={styles.title}>Želiš promjenu na bolje?</h1>
      <p className={styles.subtitle}>
        Force fitness centar je mjesto gdje se osjećaš kao doma dok ostvaruješ
        svoj cilj!
      </p>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdaQPVeKb1_TX_BqMWsS1Tw6IFvvST5FU7djDv1uO_IqYj1kA/viewform?vc=0&c=0&w=1&flr=0"
        target="blank"
        className={classnames("btn-primary", styles.ctaButton)}
      >
        Pridruži nam se!
      </a>
      <div className={classnames(styles.emojiBox, styles.emoji1)}>
        <EmojiIcon>💪</EmojiIcon>
        <EmojiIcon>🏋🏼‍♀️</EmojiIcon>
        <EmojiIcon>🏆</EmojiIcon>
      </div>
      <div
        className={classnames(
          styles.emojiBox,
          styles.emoji2,
          styles.emojiWhite
        )}
      >
        <EmojiIcon>👙</EmojiIcon>
        <EmojiIcon>💕</EmojiIcon>
        <EmojiIcon>☺️</EmojiIcon>
        <EmojiIcon>🧘🏻‍♀️</EmojiIcon>
      </div>
      <div className={classnames(styles.emojiBox, styles.emoji3)}>
        <EmojiIcon>👟</EmojiIcon>
        <EmojiIcon>🥇</EmojiIcon>
      </div>
    </div>
  </section>
);
