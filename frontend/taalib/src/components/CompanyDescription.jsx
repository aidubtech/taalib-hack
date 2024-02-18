import React from 'react'
import learn from '../assets/learn.png'

const CompanyDescription = () => {
  return (
    <div style={styles.container}>
        <div class="image_container">
            <img style={styles.img_learn} src={learn} alt="Image Alt Text" />
        </div>
        <div style={styles.text_container}>
            <h1 style={styles.heading_text}>TAALIB: Revolutionizing Islamic Education</h1>
            <h3>For Madrasah Owners:</h3>
            <p>Taalib is a groundbreaking platform designed to empower Madrasah owners in establishing and managing Islamic learning centers effortlessly. As a Madrasah owner on Taalib, you can create a customizable profile for your institution, seamlessly manage student enrollments, organize classes with intuitive scheduling tools, centralize study materials for enhanced learning, and effortlessly keep track of fees and payments. Taalib simplifies the process of digitizing your Madrasah, allowing you to focus on delivering quality Islamic education.</p>
            <h3>For Students:</h3>
            <p>Embark on your journey of Islamic learning with Taalib, your gateway to a digital education experience. Explore a variety of registered Madrasahs, easily create an account, and enroll in the Madrasah that aligns with your learning goals. Access a wealth of study materials, stay informed about class schedules, and make secure and hassle-free fee payments within the Taalib platform. Taalib connects you with dedicated Madrasahs, facilitating your educational journey towards knowledge and enlightenment.</p>
        </div>
        
    </div>
  )
}

const styles = {
    container: {
        width: '100%',
        height: '45rem',
        backgroundColor: '#fffaf6',
        top: '50rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px'
    },
    image_container: {
      flex: '0 0 45%', /* Adjust the width as needed */
    },
    text_container: {
        flex: '0 0 42%', /* Adjust the width as needed */
        margin: '0 5rem' 
    },
    heading_text: {
        fontSize: '3rem',
        color: '#006266'
    },
    img_learn: {
      width: '45rem',
      height: 'auto',
    }
}

export default CompanyDescription