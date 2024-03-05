"use client"
import { useState} from 'react'
import './book.css'
import Footer from '../Footer';
export default function Book(props) {
    const{content,image,title}=props;
    const [lang, setlang] = useState('en');
    const [data, setdata] = useState(content[0].en)
    const handleLang=(e)=>{
        let temp=e.target.value
        setlang(temp)
        if(temp=='bn')
        setdata(content[0].bn)
    else if(temp=='hi')
    setdata(content[0].hi)
 
    
    else if(temp=='ta')
    setdata(content[0].ta)
    else if(temp=='te')
    setdata(content[0].te)
    else if(temp=='te')
    setdata(content[0].zh)
    else if(temp=='kn')
    setdata(content[0].kn)
    else if(temp=='fr')
    setdata(content[0].fr)
else
setdata(content[0].en)
    }
  
  return (
    <div>
        <div id="wrapper">
    <div id="container">
        <section className="open-book">
            <header>
                <h3>Rareplanet Luxe</h3>
                
               
            </header>
            <span className='text-yellow-500'>Change Language</span>
          <select className='ps-8' onChange={handleLang}>
            <option value="en">English</option>
            <option value="hi">हिन्दी (Hindi)</option>
            <option value="bn">বাংলা (Bengali)</option>
            <option value="ta">தமிழ் (Tamil)</option>
            <option value="te">తెలుగు (Telugu)</option>
            <option value="kn">ಕನ್ನಡ (Kannada)</option>
            <option value="fr">Français (French)</option>
          </select>
            <article>
                {/* <img src={'/blogs/'+image} className='w-1/2'/> */}
          
                <h2 className="chapter-title">{title}</h2>
                {
                    data.map((item)=>{
                        return <p>{item}</p>
                    })
                }
 
            </article>
            <footer>
                <ol id="page-numbers">
                    <li>1</li>
                    <li>2</li>
                </ol>
            </footer>
        </section>

    </div>
</div>
    </div>

    
  )
}
