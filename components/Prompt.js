import Link from 'next/link'
import { useEffect } from 'react'

export default function Prompt() {
    useEffect(() => {
        const elm = document.getElementById('prompt')
        let loc = localStorage.getItem("Accepted");
        if (!loc) {
            localStorage.setItem("Accepted", "False");
        }
        if (loc == 'True') {
            elm.style.display = 'none'
        }
        let timerId = setTimeout(() => {
            elm.style.display = 'none'
        }, 10000);
        return () => clearTimeout(timerId)
    }, [])
    return (
        <div className='text-sm text-gray-100 dark:text-gray-100' id='prompt' style={{
            position: 'fixed',
            bottom: '0',
            width: '100%',
            backgroundColor: '#0d0d0d',
            textAlign: 'center',
            padding: '10px'
        }}>
            এই ওয়েবসাইটটি Google Analytics এবং Google Adsense এবং Giscus ব্যবহার করে। আমাদের পড়ুন
            <br />
            <Link href="/terms-and-conditions"> শর্তাবলী</Link> এবং <Link href="/privacy-policies">গোপনীয়তা নীতি</Link>
            <br />
            <button style={{
                backgroundColor: 'green',
                padding: '3px 15px',
                borderRadius: '3px',
                marginRight:'10px'
            }}
                onClick={() => {
                    const elm = document.getElementById('prompt')
                    localStorage.setItem("Accepted", "True");
                    elm.style.display = 'none'
                }}
            >গ্রহণ</button>
            <button style={{
                backgroundColor: 'crimson',
                padding: '3px 15px',
                borderRadius: '3px'
            }}
                onClick={() => {
                    const elm = document.getElementById('prompt')
                    localStorage.setItem("Accepted", "False");
                    elm.style.display = 'none'
                }}
            >প্রত্যাখ্যান</button>
        </div>
    )
}
