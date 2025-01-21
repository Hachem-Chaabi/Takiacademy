const Button = ({
  children,
  createUser,
  type,
  hasOnlyLogo,
  size,
  toggleClose,
}: {
  createUser?: any
  children: any
  toggleClose?: any
  type: any
  hasOnlyLogo?: any
  size?: any
}) => {
  return (
    <button
      onClick={toggleClose}
      className={`${type === 'primary' ? 'button_primary' : 'button_secondary'} ${size === 'small' && 'button_small'}
        ${hasOnlyLogo && 'button_secondary_hasOnlyLogo'} button`}
      data-type={hasOnlyLogo}
    >
      {children}
    </button>
  )
}
export default Button
