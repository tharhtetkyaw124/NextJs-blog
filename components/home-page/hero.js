import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/Nana.jpg'
          alt='An image showing THK'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm THK</h1>
      <p>
        I blog about web development - especially frontend frameworks like
          React and Typescript ::::::.
      </p>
    </section>
  );
}

export default Hero;
