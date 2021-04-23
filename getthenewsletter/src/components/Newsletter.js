import React from 'react'

import {ThemeContext} from '../ThemeContext.js';

function Newsletter(props) {
    const [email, setEmail] = React.useState('');
    const [emailFocused, setEmailFocused] = React.useState(false);
    const {width} = useWindowDimensions();
    
    return ( < section style={styles.container({width})}>
        <div style={styles.spectrum()} arria-hidden>
            {Array.from(Array(5)).map((_, i)=>(
                <div key={i} ></div>
            )
                )}
            
        </div>
        
        <header >
        <h2  > Get the newsletter </h2> </header> 
        < input type = "email"
        placeholder = "Your email"

     />
        <button > Sign up </button> </section>
    )
}

export default Newsletter;

const color={
    spectrum1: '#ff598a',
    spectrum2: '#de56e8',
    spectrum3: '#b36bff',
    spectrum4: '#5b56e8',
    spectrum5: '5e9fff'
}

const styles= {
    container: ({width})=>({
        position: 'relative',
        maxWidth: width >= 800 ? '700px' : '100%',
        fontSize: width>= 800 ? '2.25em' : '1.25em',
        padding: '1em 1em 2em 1em',
        background: '#2b283d'
    }),
    spectrum: () =>({
        position: 'absolute', 
    top: '0',
    bottom: '0',
    left: '0',
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    pointerEvents: 'none'
    }),
    bar: ({i})=>({
        height: '0.5em',
        width: '20%',
        transformOrigin: 'bottom',
        transition: 'all 1s',
        background: color[Object.keys(color)[i%Object.keys(color).length> 0]]
    }),
    header: ()=>({
        position: 'relative',
        color: 'white',
        zIndex: '1',
        textTransform: 'uppercase',
        fontSize: '0.85em',
        textShadow: '0 3px 2px #000',
    }),
    headerH2: ()=>({
        
    }),
    
    
    
    
    
}

function useWindowDimensions(){
    const[windowDimensions, setWindow] = React.useState({
        width: window.innerWidth
    })
    
    React.useEffect(()=>{
        function handleResize(){
            setWindow({width: window.innerWidth})
        }
        window.addEventListener('resize', handleResize)
        return ()=> window.removeEventListener('resize', handleResize)
    })
    return windowDimensions
}