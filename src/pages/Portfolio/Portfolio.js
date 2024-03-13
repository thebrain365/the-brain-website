import './Portfolio.css'

const Portfolio = () => {
   return (
      
      <div id='portfolio' >
         <h1 id='page-title' >
            Welcome to my portfolio
         </h1>
         <section id='education' >
            <h3>
               Educational Background
            </h3>
            <h1>
               University of the Witwatersrand
            </h1>
            <div id='uni-majors' >
               <div id='math' >
                  <h3>
                     Math
                  </h3>
                  <p>
                     Algebra I, Calculus I, Multivariable Calculus, Basic Analysis, Transition to Abstract Mathematics II, Abstract Mathematics II, Linear Algebra II, Introduction to Mathematical Statistics, Positive Linear Systems III (Leontif Systems), Group Theory III, Real Analysis III, Complex Analysis III
                  </p>
               </div>
               <div id='comp' >
                  <h3>
                     Computer Science
                  </h3>
                  <p>
                     Computational and Applied Mathematics I, Basic Computer Organisation I, Discrete Computational Structures I, Introduction to Data Structures and Algorithms I, Introduction to Algorithms and Programming I, Database Fundamentals II, Mobile Computing II, Analysis of Algorithms II, Computer Networks II, Formal Languages and Automata, Advanced Analysis of Algorithms III, Software Design III, Operating Systems and System Programming III
                  </p>
               </div>
               <div id='econ-and-fin' >
                  <h3>Economics and Finance</h3>
                  <p>
                     Economic Theory 1A - Microeconomics for Economists, Economic Theory 1B - Macroeconomics for Economists, Corporate Finance, Investment II
                  </p>
               </div>
            </div>
         </section>
      </div>
   );
}
 
export default Portfolio;