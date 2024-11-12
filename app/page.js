import styles from "./page.module.css";
import ImageOne from'./image/Image.png'
import Image from "next/image";
import ImageTwo from'./image/Image (1).png'
import ImageThree from'./image/Image (2).png'
import ShoppingCart from './image/shoppingCart.png'
import Arrow from './image/arrow.png'

export default function Home() {
  const steps = [
    {
      number: "1",
      title: 'Получите</br> партнерскую ссылку',
      image: ImageOne,
      alt: "stepOne",
      containerStyle: styles.containerStepOne,
      stepNumberStyle: styles.stepNumberOne,
      stepImageStyle: styles.stepImageOne,
    },
    {
      number: "2",
      title: "Расскажите</br> о IIII.COM",
      image: ImageTwo,
      alt: "stepTwo",
      containerStyle: styles.containerStepTwo,
      stepNumberStyle: styles.stepNumberTwo,
      stepImageStyle: styles.stepImageTwo,
    },
    {
      number: "3",
      title: "Получайте хороший процент</br> от покупок по вашей ссылке!",
      image: ImageThree,
      alt: "stepThree",
      containerStyle: styles.containerStepThree,
      stepNumberStyle: styles.stepNumberThree,
      stepImageStyle: styles.stepImageThree,
    },
  ];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.titleBox}>
          <h3 className={styles.title}>Зарабатывайте вместе с нами!</h3>
        </div>
        <div className={styles.container}>
          {steps.map((step, index) => (
            <>
              <div className={step.containerStyle} key={`container-${index}`}>
                <div className={styles.containerBox}>
                  <div className={step.stepNumberStyle}>{step.number}</div>
                  <h3
                  className={styles.stepTitle}
                  dangerouslySetInnerHTML={{ __html: step.title }}
                />
                </div>
                <div className={step.stepImageStyle}>
                  <Image src={step.image} alt={step.alt}/>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className={index === 0 ? styles.arrowOne : styles.arrowTwo} key={`arrow-${index}`}>
                  <Image src={Arrow} alt="arrow"/>
                </div>
              )}
            </>
          ))}
        </div>
        <div className={styles.btnBox}>
          <button className={styles.btn}>
            <Image className={styles.btnImage} src={ShoppingCart} alt="Shopping Cart Icon" width={24} height={24} />
            Статья партнером
          </button>
        </div>
      </main>
    </div>
  );
}
