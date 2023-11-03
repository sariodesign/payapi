import { gsap } from 'gsap'
import SplitType from 'split-type'

const ourText = new SplitType('p.code', { types: 'chars' })
const chars = ourText.chars

gsap.fromTo(
  chars,
  { 
    display: 'none'
  },
  {
    display: 'inline-block',
    stagger: .025,
    duration:.5,
    ease: 'power4.out',
  }
)