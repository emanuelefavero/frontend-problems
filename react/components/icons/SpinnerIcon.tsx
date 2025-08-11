type Props = React.ComponentPropsWithRef<'svg'>

// * @see https://magecdn.com/tools/svg-loaders

export default function Component({ className }: Props) {
  return (
    <svg
      fill='none'
      width='100%'
      height='100%'
      className={`fill-(--primary) animate-spin stroke-slate-500/15 ${className}`}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      {/* Background circle */}
      <circle
        cx='12'
        cy='12'
        r='10'
        // stroke='stroke-red-500'
        strokeWidth='3'
        fill='none'
      />
      {/* Spinner arc */}
      <path d='M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z'></path>
    </svg>
  )
}
