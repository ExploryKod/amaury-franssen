import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
  >
    <path fill="url(#a)" d="M0 0h171v46H0z" />
    <defs>
      <pattern
        id="a"
        fill="var(--button)"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="scale(.00585 .02174)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="b"
        width={171}
        height={46}
      />
    </defs>
  </svg>
)
export default SvgComponent
