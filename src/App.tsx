import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { About } from './sections/About'
import { Advantages } from './sections/Advantages'
import { Conclusion } from './sections/Conclusion'
import { Contact } from './sections/Contact'
import { Features } from './sections/Features'
import { Goals } from './sections/Goals'
import { Hero } from './sections/Hero'
import { ProblemSolution } from './sections/ProblemSolution'
import { Process } from './sections/Process'
import { Results } from './sections/Results'
import { Security } from './sections/Security'
import { Tasks } from './sections/Tasks'

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProblemSolution />
        <Goals />
        <Tasks />
        <Features />
        <Process />
        <Advantages />
        <Results />
        <Security />
        <Conclusion />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
