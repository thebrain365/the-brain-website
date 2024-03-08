const SmallMediaWelcomeSectionBgSvg = () => {
   return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393 788" fill="none">
         <g id="small-media-welcome-section-bg" clip-path="url(#clip0_156_36)">
            <rect width="393" height="788" fill="url(#paint0_linear_156_36)" fill-opacity="0.85"/>
            <g id="Vector 3" filter="url(#filter0_di_156_36)">
               <path d="M204.471 149H393.471V360.5H204.471C15.4716 360.5 26.9709 149 204.471 149Z" fill="url(#paint1_linear_156_36)"/>
            </g>
         </g>
         <defs>
            <filter id="filter0_di_156_36" x="67" y="149" width="351.471" height="236.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
               <feFlood flood-opacity="0" result="BackgroundImageFix"/>
               <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
               <feOffset dx="15" dy="15"/>
               <feGaussianBlur stdDeviation="5"/>
               <feComposite in2="hardAlpha" operator="out"/>
               <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
               <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_156_36"/>
               <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_156_36" result="shape"/>
               <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
               <feOffset dx="15" dy="15"/>
               <feGaussianBlur stdDeviation="10"/>
               <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
               <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
               <feBlend mode="color-burn" in2="shape" result="effect2_innerShadow_156_36"/>
            </filter>
            <linearGradient id="paint0_linear_156_36" x1="578.5" y1="498.049" x2="42.0925" y2="-41.8224" gradientUnits="userSpaceOnUse">
               <stop stop-color="#00C2FF"/>
               <stop offset="1" stop-color="#FF04C8"/>
            </linearGradient>
            <linearGradient id="paint1_linear_156_36" x1="118" y1="174.5" x2="393" y2="361" gradientUnits="userSpaceOnUse">
               <stop stop-color="#FFF500"/>
               <stop offset="1" stop-color="#FF7A00"/>
            </linearGradient>
            <clipPath id="clip0_156_36">
               <rect width="393" height="788" fill="white"/>
            </clipPath>
         </defs>
      </svg>
   );
}
 
export default SmallMediaWelcomeSectionBgSvg;