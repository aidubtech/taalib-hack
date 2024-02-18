import React from 'react'
import signup from '../assets/signup_icon.png'
import search from '../assets/search_icon.png'
import madrasah from '../assets/madrasah_icon.png'

const HowItworks = () => {
  return (
    <div>
        <section>
            <div style={styles.title}>
                <h1>HOW IT WORKS</h1>
                <p>Follow the steps below to get started</p>
            </div>
            <div style={styles.container}>
                <div style={styles.step_div}>
                    <p style={styles.step_text}>Step 01</p>
                    <img style={styles.icons} src={signup} alt='Sign up' />
                    <h3 style={styles.details}>Sign Up To Get Started</h3>
                </div>
                <div style={styles.step_div}>
                    <p style={styles.step_text}>Step 02</p>
                    <img style={styles.icons} src={search} alt='Search Madrasah' />
                    <h3 style={styles.details}>Search For Madrasah</h3>
                </div>
                <div style={styles.step_div}>
                    <p style={styles.step_text}>Step 03</p>
                    <img style={styles.icons} src={madrasah} alt='Join A Madrasah' />
                    <h3 style={styles.details}>Register with Any Madrasah Of Your Choice</h3>
                </div>
            </div>
        </section>
    </div>
  )
}

const styles = {
    container: {
        maxWidth: '75%',
        height: '70vh',
        marginTop: '40px',
        display: 'flex',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(45deg, #00a4aa, #000)',
        bottom: '30rem'
    },
    step_div: {
        width: '15rem',
        height: '20rem',
        margin: '3em',
        backgroundColor: '#fff',
        borderRadius: '1rem'
    },
    step_text: {
        textAlign: 'center'
    },
    title: {
        textAlign: 'center',
        color: '#006266'
    },
    icons: {
        height: '150px',
        width: '200px',
        marginLeft: '1.3em'
    },
    details: {
        textAlign: 'center',
        color: '#006266'
    }
}

export default HowItworks