import style from './Section.module.css';

const Section = ({ children, ...props }) => {
  return (
    <section {...props} className={style.section}>
      {children}
    </section>
  );
};

export default Section;
