import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../assets/Animation - 1705050805289.json'


const Banner = () => {
  return (
    <div class="container" style={styles.container}>
        
        <div style={styles.banner}>
            <div style={styles.inner_banner}>
                <Lottie animationData={animationData} />
            </div>
            <div style={styles.container}>
                <div style={styles.banner_wrapper}>
                    <span style={styles.banner_content}>Discover</span>
                    <h1 style={styles.banner_heading}>A Citadel Of learning</h1>
                    <hr style={styles.underline} />
                    <p style={styles.banner_paragraph}>All madrasahs are run independently. All madrasahs are run on affordable fees. All materials are well curated for all levels</p>
                    <a href="#" style={styles.banner_btn}>Sign Up Today</a>
                </div>
            </div>
        </div>
        
    </div>
  )
}

const styles = {
    container: {
        maxWidth: '40%',
        height: '100vh',
        marginTop: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        bottom: '30rem'
    },
    banner: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '50px',
        padding: '10px',
        backgroundColor: '#fff',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        opacity: '0.9',
        zIndex: 2
    },
    inner_banner: {
        position: 'absolute',
        width: '50%',
        height: '70%',
        justifyContent: 'center',
        margin: '30px 45px',
        right: 0,
        zIndex: 1,
        padding: '10px',
        backgroundColor: '#fff',
        boxShadow: '7px 7px 10px 10px #808080',
        opacity: '1.1',
    },
    header_text: {
        margin: 0,
        padding: 0,
        fontSize: '24px',
        marginBottom: '10px'
    },
    paragraph: {
        margin: 0,
        padding: 0,
        marginBottom: '10px'
    },
    banner_button: {
        margin: 0,
        padding: 0,
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
    },
    lottie_animation: {
        width: '40rem',
        height: '40rem',    
    },
    banner_content: {
        marginTop: '140px',
        textTransform: 'uppercase',
        letterSpacing: '1.5px',
        fontSize: '1.5rem',
        color: '#000'
    },
    banner_heading: {
        textTransform: 'capitalize',
        letterSpacing: '0.8px',
        fontSize: '5rem',
        fontWeight: 600,
        lineHeight: 1.1,
        backgroundColor: '#00a4aa',
        background: 'linear-gradient(45deg, #00a4aa, #000)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        display: 'inline-block',
        marginTop: '0.8rem'
        
        
    },
    banner_paragraph: {
        lineHeight: 1.6,
        color: '#000',
        fontSize: '1.1rem',
    },
    underline: {
        display: 'block',
        background: '#00a4aa',
        height: '0.25rem',
        width: '6.25rem',
        border: 'none',
        margin: '0rem 0 1.875rem 0'
    },
    banner_btn: {
        display: 'inline-block',
        color: '#717171',
        background: '#fff',
        padding: '0.625rem 1.875rem',
        marginTop: '2.125rem',
        textDecoration: 'none',
        textTransform: 'uppercase',
        border: '2px solid #c2c2c2',
        borderRadius: '3.125rem',
        transition: '0.3s ease-in-out'
    },
    container: {
        position: 'relative',
        width: 'calc(min(90rem, 100%))',
        margin: '0 auto',
        minHeight: '100vh',
        columnGap: '3rem',
        padding_block: 'min(20vh, 3rem)',
        borderRadius: '5rem'
    },
    banner_wrapper: {
        width: '30%',
        margin: '80px 50px',
    }

}



export default Banner