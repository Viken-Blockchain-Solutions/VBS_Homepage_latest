import clsx from 'clsx'

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600'
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Visit Us" invert={invert}>
          Bachetomta Næringspark
          <br />
          Terminalen 9  
          <br />
          3414 Lierstranda, Norway
        </Office>
      </li>
      <li>
        <Office name="Company Info" invert={invert}>
          VBS - Viken Blockchain Solutions AS
          <br />
          NO 930 668 869 MVA
        </Office>
      </li>
    </ul>
  )
}
