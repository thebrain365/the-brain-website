const MenuIcon = (props) => {
   return (
      <svg id='menu-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none"
         onClick={ props.handleMenuClicked }
      >
         <g id="menu-circles" filter="url(#filter0_di_159_58)">
            <mask id="mask0_159_58" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="15" y="15" width="90" height="90">
               <g id="circles">
                  <circle id="Ellipse 1" cx="35" cy="35" r="20" fill="#D9D9D9"/>
                  <circle id="Ellipse 2" cx="85" cy="85" r="20" fill="#D9D9D9"/>
                  <circle id="Ellipse 3" cx="35" cy="85" r="20" fill="#D9D9D9"/>
                  <circle id="Ellipse 4" cx="85" cy="35" r="20" fill="#D9D9D9"/>
               </g>
            </mask>
            <g mask="url(#mask0_159_58)">
               <rect id="Rectangle 30" x="15" y="15" width="90" height="90" rx="20" fill="url(#paint0_linear_159_58)"/>
            </g>
         </g>
         <defs>
            <filter id="filter0_di_159_58" x="0" y="0" width="120" height="120" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
               <feFlood flood-opacity="0" result="BackgroundImageFix"/>
               <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
               <feOffset/>
               <feGaussianBlur stdDeviation="7.5"/>
               <feComposite in2="hardAlpha" operator="out"/>
               <feColorMatrix type="matrix" values="0 0 0 0 0.960784 0 0 0 0 0.960784 0 0 0 0 0.960784 0 0 0 0.3 0"/>
               <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_159_58"/>
               <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_159_58" result="shape"/>
               <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
               <feOffset/>
               <feGaussianBlur stdDeviation="7.5"/>
               <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
               <feColorMatrix type="matrix" values="0 0 0 0 0.960784 0 0 0 0 0.960784 0 0 0 0 0.960784 0 0 0 0.25 0"/>
               <feBlend mode="normal" in2="shape" result="effect2_innerShadow_159_58"/>
            </filter>
            <linearGradient id="paint0_linear_159_58" x1="15" y1="15" x2="105" y2="105" gradientUnits="userSpaceOnUse">
               <stop stop-color="#FF6B00"/>
               <stop offset="1" stop-color="#FFF500"/>
            </linearGradient>
         </defs>
      </svg>
   );
}
 
export default MenuIcon;