import styles from './styles.module.css';
type ButtonProps = {
  icon: React.ReactNode;
} & React.ComponentProps<'button'>;

export function DefaultButton({icon, ...props }: ButtonProps) {
  return (
    <>
      <button className={styles.button} {...props}>
          {icon}
      </button>
    </>
  );
}
